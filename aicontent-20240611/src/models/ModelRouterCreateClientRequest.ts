// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateClientRequest extends $dara.Model {
  /**
   * @remarks
   * The company address.
   * 
   * @example
   * 杭州市
   */
  address?: string;
  /**
   * @remarks
   * A comma-separated list of model IDs that the client can use. If this parameter is empty, the client can use all available models.
   * 
   * @example
   * 1,2,3
   */
  allowedModels?: string;
  /**
   * @remarks
   * The contact information.
   * 
   * @example
   * 13800138000
   */
  contact?: string;
  /**
   * @example
   * 1.0
   */
  discount?: number;
  /**
   * @remarks
   * The client name.
   * 
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
   * @remarks
   * Additional remarks.
   * 
   * @example
   * 备注
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      allowedModels: 'allowedModels',
      contact: 'contact',
      discount: 'discount',
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
      discount: 'number',
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

