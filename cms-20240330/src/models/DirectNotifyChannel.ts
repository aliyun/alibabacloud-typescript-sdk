// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DirectNotifyChannel extends $dara.Model {
  /**
   * @remarks
   * An array of recipient identifiers. The format of each identifier depends on the `type`. For example, if `type` is `email`, the identifiers are email addresses.
   * 
   * This parameter is required.
   */
  identifiers?: string[];
  /**
   * @remarks
   * The notification channel type. For example, `sms` or `email`.
   * 
   * This parameter is required.
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

