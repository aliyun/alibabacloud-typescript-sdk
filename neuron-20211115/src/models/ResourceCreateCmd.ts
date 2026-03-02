// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://
   */
  address?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  configuration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {ak:xxxx,sk:xxx}
   */
  credentials?: string;
  /**
   * @example
   * 用于统一管理资源
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Redis
   */
  name?: string;
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Redis
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Inner
   */
  useScope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Share
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      companyId: 'companyId',
      configuration: 'configuration',
      credentials: 'credentials',
      description: 'description',
      env: 'env',
      name: 'name',
      namespace: 'namespace',
      productId: 'productId',
      type: 'type',
      useScope: 'useScope',
      useType: 'useType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      companyId: 'number',
      configuration: 'string',
      credentials: 'string',
      description: 'string',
      env: 'string',
      name: 'string',
      namespace: 'string',
      productId: 'number',
      type: 'string',
      useScope: 'string',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

