// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorContact } from "./MonitorContact";


export class MonitorContactGroup extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  contacts?: MonitorContact[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtModified?: string;
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
   * yani
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      contacts: 'contacts',
      enterpriseId: 'enterpriseId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      contacts: { 'type': 'array', 'itemType': MonitorContact },
      enterpriseId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

