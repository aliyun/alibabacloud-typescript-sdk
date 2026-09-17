// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMasterSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the instance IDs of all AnalyticDB for PostgreSQL instances in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The effective period of the specification change. Valid values: 
   * - **Immediately** (default): The change takes effect immediately.
   * - **MaintainTime**: The change takes effect during the maintenance window of the instance.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * If you want to change the master node to a MasterAI node, specify this parameter.
   * 
   * > - This parameter and MasterCU cannot be specified at the same time.
   * >- Only specific regions and zones support changing the master node to a MasterAI node.
   * >- Only AnalyticDB for PostgreSQL V7.0 Basic Edition instances support MasterAI nodes.
   * >- You can view all valid values of this parameter on the specification change page for the master node.
   * 
   * @example
   * ADB.AIMedium.2
   */
  masterAISpec?: string;
  /**
   * @remarks
   * The master resources. Valid values: 
   * - 2 CU 
   * - 4 CU 
   * - 8 CU 
   * - 16 CU 
   * - 32 CU 
   * > Master resources greater than 8 CU incur additional fees.
   * 
   * @example
   * 8 CU
   */
  masterCU?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For information about how to obtain the resource group ID, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      masterAISpec: 'MasterAISpec',
      masterCU: 'MasterCU',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      effectiveTime: 'string',
      masterAISpec: 'string',
      masterCU: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

