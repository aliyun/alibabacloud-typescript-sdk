// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientTreeDTO extends $dara.Model {
  /**
   * @example
   * 杭州市
   */
  address?: string;
  /**
   * @example
   * 1,2,3
   */
  allowedModels?: string;
  /**
   * @example
   * []
   */
  children?: ClientTreeDTO[];
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
   * 我的客户
   */
  name?: string;
  /**
   * @example
   * null
   */
  parentId?: number;
  /**
   * @example
   * 备注
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      allowedModels: 'allowedModels',
      children: 'children',
      clientUuid: 'clientUuid',
      contact: 'contact',
      deleteTag: 'deleteTag',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      level: 'level',
      main: 'main',
      name: 'name',
      parentId: 'parentId',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allowedModels: 'string',
      children: { 'type': 'array', 'itemType': ClientTreeDTO },
      clientUuid: 'string',
      contact: 'string',
      deleteTag: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      level: 'number',
      main: 'number',
      name: 'string',
      parentId: 'number',
      remark: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

