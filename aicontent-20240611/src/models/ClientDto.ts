// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientDTO extends $dara.Model {
  /**
   * @example
   * Hangzhou
   */
  address?: string;
  /**
   * @example
   * {"model_ids":[1,2],"group_ids":["mg_xxx"]}
   */
  allowedModelGroupConfig?: string;
  /**
   * @example
   * 1,2,3
   */
  allowedModels?: string;
  /**
   * @example
   * st-xxxx
   */
  clientUuid?: string;
  /**
   * @example
   * 13800138000
   */
  contact?: string;
  /**
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @example
   * 1.0
   */
  discount?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  level?: number;
  /**
   * @example
   * 0
   */
  main?: number;
  /**
   * @example
   * My customer
   */
  name?: string;
  /**
   * @example
   * department
   */
  nodeType?: string;
  /**
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @example
   * Remarks
   */
  remark?: string;
  /**
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

