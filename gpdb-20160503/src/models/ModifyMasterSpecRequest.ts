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
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter must be specified if you want to change coordinator nodes to AI coordinator nodes.
   * >-  You cannot specify the MasterAISpec and MasterCU parameters at the same time.
   * >- You can change coordinator nodes to AI coordinator nodes only in specific regions and zones.
   * >- Only AnalyticDB for PostgreSQL V7.0 instances of Basic Edition support AI coordinator nodes.
   * >- You can view the valid values of this parameter on the configuration change page of coordinator nodes.
   * 
   * @example
   * ADB.AIMedium.2
   */
  masterAISpec?: string;
  /**
   * @remarks
   * The specifications of coordinator node resources. Valid values:
   * 
   * *   2 CU
   * *   4 CU
   * *   8 CU
   * *   16 CU
   * *   32 CU
   * 
   * >  You are charged for coordinator node resources of more than 8 compute units (CUs).
   * 
   * @example
   * 8 CU
   */
  masterCU?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For information about how to obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      masterAISpec: 'MasterAISpec',
      masterCU: 'MasterCU',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
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

