// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronApp extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  accessType?: string;
  /**
   * @example
   * 1343424
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 分销APP
   */
  alias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ORDER
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 升级订单功能
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enterpriseId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://wwww.ali.com
   */
  iconUrl?: string;
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
   * order
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 多端商城
   */
  owner?: string;
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
   * NEW
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'accessType',
      accountId: 'accountId',
      alias: 'alias',
      bizType: 'bizType',
      description: 'description',
      enterpriseId: 'enterpriseId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      iconUrl: 'iconUrl',
      id: 'id',
      name: 'name',
      owner: 'owner',
      productId: 'productId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      accountId: 'string',
      alias: 'string',
      bizType: 'string',
      description: 'string',
      enterpriseId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      productId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

