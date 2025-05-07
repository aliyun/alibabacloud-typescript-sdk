// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateGADInstanceRequestTag } from "./CreateGadinstanceRequestTag";
import { CreateGADInstanceRequestUnitNode } from "./CreateGadinstanceRequestUnitNode";


export class CreateGADInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the primary instance. You can call the DescribeDBInstances operation to query the instance ID. The primary instance serves as the central node of the global active database cluster.
   * 
   * > *   A primary instance can serve only as the central node of a single global active database cluster.
   * > *   The primary instance can serve as the central node of the global active database cluster only in the following regions: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), and China (Chengdu).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5*******
   */
  centralDBInstanceId?: string;
  /**
   * @remarks
   * The username of the privileged account of the central node. You can call the DescribeAccounts operation to query the privileged account of the central node.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  centralRdsDtsAdminAccount?: string;
  /**
   * @remarks
   * The password of the privileged account of the central node.
   * 
   * This parameter is required.
   * 
   * @example
   * Test12345
   */
  centralRdsDtsAdminPassword?: string;
  /**
   * @remarks
   * The region ID of the central node. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  centralRegionId?: string;
  /**
   * @remarks
   * A JSON array that consists of the information about a specified database on the central node. All database information that you specify in this array is synchronized to the unit nodes of the global active database cluster. The JSON array contains the following fields:
   * 
   * *   **name**: the name of the database.
   * *   **all**: specifies whether to synchronize all data in the database or the table. Valid values: **true** and **false**.
   * *   **Table**: the name of the table. If you set the **all** field to **false**, you must nest the name of the table that you want to synchronize into the JSON array.
   * 
   * Example: `{ "testdb": { "name": "testdb", "all": false, "Table": { "order": { "name": "order", "all": true }, "ordernew": { "name": "ordernew", "all": true } } } }`
   * 
   * This parameter is required.
   * 
   * @example
   * {    "testdb": {     "name": "testdb",     "all": false,     "Table": {       "order": {         "name": "order",         "all": true       },       "ordernew": {         "name": "ordernew",         "all": true       }     }   } }
   */
  DBList?: string;
  /**
   * @remarks
   * The name of the global active database cluster.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * An array that consists of the details about the tag.
   */
  tag?: CreateGADInstanceRequestTag[];
  /**
   * @remarks
   * The information about the unit node.
   * 
   * This parameter is required.
   */
  unitNode?: CreateGADInstanceRequestUnitNode[];
  static names(): { [key: string]: string } {
    return {
      centralDBInstanceId: 'CentralDBInstanceId',
      centralRdsDtsAdminAccount: 'CentralRdsDtsAdminAccount',
      centralRdsDtsAdminPassword: 'CentralRdsDtsAdminPassword',
      centralRegionId: 'CentralRegionId',
      DBList: 'DBList',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      unitNode: 'UnitNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralDBInstanceId: 'string',
      centralRdsDtsAdminAccount: 'string',
      centralRdsDtsAdminPassword: 'string',
      centralRegionId: 'string',
      DBList: 'string',
      description: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateGADInstanceRequestTag },
      unitNode: { 'type': 'array', 'itemType': CreateGADInstanceRequestUnitNode },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.unitNode)) {
      $dara.Model.validateArray(this.unitNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

