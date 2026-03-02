// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorContactGroupUpdateCmd extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  contactIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 尚仁
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      contactIds: 'contactIds',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      contactIds: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactIds)) {
      $dara.Model.validateArray(this.contactIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

