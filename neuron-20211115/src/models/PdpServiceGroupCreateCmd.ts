// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpServiceGroupCreateCmd extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 管理
   */
  alias?: string;
  /**
   * @example
   * 管理
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSTOM
   */
  groupType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * employee
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      alias: 'alias',
      description: 'description',
      env: 'env',
      groupType: 'groupType',
      name: 'name',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      alias: 'string',
      description: 'string',
      env: 'string',
      groupType: 'string',
      name: 'string',
      serviceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

