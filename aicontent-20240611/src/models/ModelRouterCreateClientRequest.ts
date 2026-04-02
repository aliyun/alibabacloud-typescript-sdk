// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateClientRequest extends $dara.Model {
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
   * 13800138000
   */
  contact?: string;
  /**
   * @example
   * 我的客户
   */
  name?: string;
  /**
   * @example
   * 1
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
      contact: 'contact',
      name: 'name',
      parentId: 'parentId',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allowedModels: 'string',
      contact: 'string',
      name: 'string',
      parentId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

