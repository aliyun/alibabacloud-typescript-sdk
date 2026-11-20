// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientUpdateCmd extends $dara.Model {
  /**
   * @remarks
   * The company address.
   * 
   * @example
   * Hangzhou
   */
  address?: string;
  /**
   * @remarks
   * The list of allowed model IDs, separated by commas. An empty value indicates all models.
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
   * @remarks
   * The customer name.
   * 
   * @example
   * My customer
   */
  name?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Remark
   */
  remark?: string;
  /**
   * @remarks
   * The status.
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

