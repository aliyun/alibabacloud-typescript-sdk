// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppDomainRedirectRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Application instance business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The number of results per query.
   * 
   * Range: 10~100. Default value: 20.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query. It is empty if there is no next query.
   * 
   * @example
   * yPkgBbQln0gmUnIZSGizGw==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

