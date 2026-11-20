// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientDTO extends $dara.Model {
  /**
   * @remarks
   * The company address.
   * 
   * @example
   * Hangzhou
   */
  address?: string;
  /**
   * @remarks
   * The authorization management configuration in the format of {"model_ids":[...],"group_ids":[...]}. An empty value indicates that group authorization is not used.
   * 
   * @example
   * {"model_ids":[1,2],"group_ids":["mg_xxx"]}
   */
  allowedModelGroupConfig?: string;
  /**
   * @remarks
   * The list of allowed model IDs, separated by commas. An empty value indicates all models.
   * 
   * @example
   * 1,2,3
   */
  allowedModels?: string;
  /**
   * @remarks
   * The customer UUID.
   * 
   * @example
   * st-xxxx
   */
  clientUuid?: string;
  /**
   * @remarks
   * The contact information.
   * 
   * @example
   * 13800138000
   */
  contact?: string;
  /**
   * @remarks
   * The status. A value of 0 indicates enabled, and a non-zero value indicates disabled.
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * The discount factor. A value of 1.0 indicates no discount.
   * 
   * @example
   * 1.0
   */
  discount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The hierarchy level. Valid values: 1 to 5.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The account type. A value of 0 indicates a main account, and a value of 1 indicates a regular account.
   * 
   * @example
   * 0
   */
  main?: number;
  /**
   * @remarks
   * The customer name.
   * 
   * @example
   * My customer
   */
  name?: string;
  /**
   * @remarks
   * The node type. Valid values: department: Department. user: User node, which is a leaf in the department tree.
   * 
   * @example
   * department
   */
  nodeType?: string;
  /**
   * @remarks
   * The parent department ID. An empty value indicates the top level.
   * 
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Remarks
   */
  remark?: string;
  /**
   * @remarks
   * The user ID. This field has a value only when the node type is user.
   * 
   * @example
   * 30001
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      allowedModelGroupConfig: 'allowedModelGroupConfig',
      allowedModels: 'allowedModels',
      clientUuid: 'clientUuid',
      contact: 'contact',
      deleteTag: 'deleteTag',
      discount: 'discount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      level: 'level',
      main: 'main',
      name: 'name',
      nodeType: 'nodeType',
      parentId: 'parentId',
      remark: 'remark',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allowedModelGroupConfig: 'string',
      allowedModels: 'string',
      clientUuid: 'string',
      contact: 'string',
      deleteTag: 'number',
      discount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      level: 'number',
      main: 'number',
      name: 'string',
      nodeType: 'string',
      parentId: 'number',
      remark: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

