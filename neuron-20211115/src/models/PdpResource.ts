// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpResource extends $dara.Model {
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
   * @example
   * 1
   */
  id?: number;
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
   * @example
   * 3239281273464326823
   */
  requestId?: string;
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
      id: 'id',
      name: 'name',
      namespace: 'namespace',
      productId: 'productId',
      requestId: 'requestId',
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
      id: 'number',
      name: 'string',
      namespace: 'string',
      productId: 'number',
      requestId: 'string',
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

