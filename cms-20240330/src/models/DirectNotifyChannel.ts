// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DirectNotifyChannel extends $dara.Model {
  /**
   * @remarks
   * The list of Notification Recipient identifiers.
   * 
   * This parameter is required.
   */
  identifiers?: string[];
  /**
   * @remarks
   * The notification channel type.
   * 
   * This parameter is required.
   * 
   * @example
   * CONTACT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      identifiers: 'identifiers',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifiers: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.identifiers)) {
      $dara.Model.validateArray(this.identifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

