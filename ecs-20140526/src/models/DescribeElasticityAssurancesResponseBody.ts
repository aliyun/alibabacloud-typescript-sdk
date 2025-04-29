// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSet } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSet";


export class DescribeElasticityAssurancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the elasticity assurances.
   */
  elasticityAssuranceSet?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSet;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceSet: 'ElasticityAssuranceSet',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceSet: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSet,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.elasticityAssuranceSet && typeof (this.elasticityAssuranceSet as any).validate === 'function') {
      (this.elasticityAssuranceSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

