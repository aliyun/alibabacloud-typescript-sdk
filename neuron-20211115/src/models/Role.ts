// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Role extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @example
   * 2022-04-01
   */
  gmtCreate?: string;
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
   * 开发者
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PDP
   */
  platform?: string;
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      enterpriseId: 'enterpriseId',
      gmtCreate: 'gmtCreate',
      id: 'id',
      name: 'name',
      platform: 'platform',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      enterpriseId: 'number',
      gmtCreate: 'string',
      id: 'number',
      name: 'string',
      platform: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

