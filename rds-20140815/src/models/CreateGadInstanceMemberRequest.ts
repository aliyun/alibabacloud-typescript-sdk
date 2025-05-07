// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateGadInstanceMemberRequestUnitNode } from "./CreateGadInstanceMemberRequestUnitNode";


export class CreateGadInstanceMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the central node . You can call the DescribeGadInstances operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gad-rm-bp1npi2j8****
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
   * A JSON array that consists of the information about the databases on the central node. All database information that you specify in this array is synchronized to the unit nodes of the global active database cluster. The JSON array contains the following fields:
   * 
   * *   **name**: the name of the database.
   * *   **all**: specifies whether to synchronize all data in the database or the table. Valid values: **true** and **false**.
   * *   **Table**: the name of the table. If you set the **all** field to **false**, you must nest the name of the table that you want to synchronize into the JSON array.
   * 
   * Example: `{ "testdb": { "name": "testdb", "all": false, "Table": { "order": { "name": "order", "all": true }, "ordernew": { "name": "ordernew", "all": true } } } }`
   * 
   * >  For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {    "testdb": {     "name": "testdb",     "all": false,     "Table": {       "order": {         "name": "order",         "all": true       },       "ordernew": {         "name": "ordernew",         "all": true       }     }   } }
   */
  DBList?: string;
  /**
   * @remarks
   * The ID of the global active database cluster. You can call the DescribeGadInstances operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gad-rm-bp1npi2j8****
   */
  gadInstanceId?: string;
  /**
   * @remarks
   * The information about the unit node.
   * 
   * This parameter is required.
   */
  unitNode?: CreateGadInstanceMemberRequestUnitNode[];
  static names(): { [key: string]: string } {
    return {
      centralDBInstanceId: 'CentralDBInstanceId',
      centralRdsDtsAdminAccount: 'CentralRdsDtsAdminAccount',
      centralRdsDtsAdminPassword: 'CentralRdsDtsAdminPassword',
      centralRegionId: 'CentralRegionId',
      DBList: 'DBList',
      gadInstanceId: 'GadInstanceId',
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
      gadInstanceId: 'string',
      unitNode: { 'type': 'array', 'itemType': CreateGadInstanceMemberRequestUnitNode },
    };
  }

  validate() {
    if(Array.isArray(this.unitNode)) {
      $dara.Model.validateArray(this.unitNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

