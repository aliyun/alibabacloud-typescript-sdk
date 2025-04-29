// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItem } from "./DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItem";


export class DescribeElasticityAssuranceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the instances that match and use the elasticity assurance.
   */
  elasticityAssuranceItem?: DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItem;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
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
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceItem: 'ElasticityAssuranceItem',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceItem: DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItem,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.elasticityAssuranceItem && typeof (this.elasticityAssuranceItem as any).validate === 'function') {
      (this.elasticityAssuranceItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

