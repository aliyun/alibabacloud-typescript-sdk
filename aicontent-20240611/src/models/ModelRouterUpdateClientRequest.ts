// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateClientRequest extends $dara.Model {
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
   * A comma-separated list of model IDs that the client can use. If this parameter is left empty, the client can use all models.
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
   * @remarks
   * A remark about the client.
   * 
   * @example
   * 备注
   */
  remark?: string;
  /**
   * @remarks
   * The client\\"s status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      allowedModels: 'allowedModels',
      contact: 'contact',
      discount: 'discount',
      name: 'name',
      remark: 'remark',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allowedModels: 'string',
      contact: 'string',
      discount: 'number',
      name: 'string',
      remark: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

