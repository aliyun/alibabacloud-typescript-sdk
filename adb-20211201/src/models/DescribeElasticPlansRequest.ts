// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * > If you do not specify this parameter, all scaling plans are queried.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * Specifies whether to query the scaling plans that are immediately enabled after the plans are created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > *   If you do not specify this parameter, the scaling plans of all resource groups are queried, covering the interactive resource group type and the elastic I/O unit (EIU) type.
   * >*   You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of a resource group within a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   **EXECUTOR**: the interactive resource group type, which specifies the computing resource type.
   * *   **WORKER**: the EIU type.
   * 
   * @example
   * EXECUTOR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      enabled: 'Enabled',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupName: 'ResourceGroupName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
      enabled: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

