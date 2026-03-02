// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Privilege extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "write,edit"
   */
  actions?: string;
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * neuron:catalog:company/1:pbc/2
   */
  resource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      actions: 'actions',
      gmtCreate: 'gmtCreate',
      id: 'id',
      requestId: 'requestId',
      resource: 'resource',
      roleId: 'roleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      actions: 'string',
      gmtCreate: 'string',
      id: 'number',
      requestId: 'string',
      resource: 'string',
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

