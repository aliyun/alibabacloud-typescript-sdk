// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp278jg9****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether the scaling plan takes effect. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  elasticPlanEnable?: boolean;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * *   The name must be 2 to 30 characters in length.
   * *   The name can contain letters, digits, and underscores (_).
   * 
   * > If you do not specify this parameter, the information about all scaling plans for the specified cluster is returned.
   * 
   * @example
   * realtime
   */
  elasticPlanName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/466685.html) operation to query the resource group name.
   * 
   * @example
   * USER_DEFAULT
   */
  resourcePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanEnable: 'ElasticPlanEnable',
      elasticPlanName: 'ElasticPlanName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolName: 'ResourcePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanEnable: 'boolean',
      elasticPlanName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

