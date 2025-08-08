// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReceiverRequest extends $dara.Model {
  comment?: string;
  /**
   * @example
   * receiver_name
   */
  receiverName?: string;
  /**
   * @example
   * 1111
   */
  receiverTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      receiverName: 'receiverName',
      receiverTenantId: 'receiverTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      receiverName: 'string',
      receiverTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

