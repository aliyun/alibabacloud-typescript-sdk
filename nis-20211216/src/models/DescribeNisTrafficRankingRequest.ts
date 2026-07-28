// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisTrafficRankingRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken returned by the previous API call.
   * 
   * @example
   * 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the traffic ranking analysis result. Set this parameter to the value returned by the StartNisTrafficRanking operation.
   * 
   * This parameter is required.
   * 
   * @example
   * task-6462a7b4c4a54b****
   */
  nisTrafficRankingId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nisTrafficRankingId: 'NisTrafficRankingId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nisTrafficRankingId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

