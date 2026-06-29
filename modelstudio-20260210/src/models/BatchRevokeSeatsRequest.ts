// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRevokeSeatsRequestItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the currently associated member.
   * 
   * @example
   * acc_123456789
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRevokeSeatsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of revocation items. This parameter is required.
   */
  items?: BatchRevokeSeatsRequestItems[];
  /**
   * @remarks
   * The language. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      locale: 'Locale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': BatchRevokeSeatsRequestItems },
      locale: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

