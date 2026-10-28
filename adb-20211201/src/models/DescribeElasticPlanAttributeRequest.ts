// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlanAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the elastic plan.
   * > Call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the name of the elastic plan for the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

