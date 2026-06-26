// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReceiverRequest extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * Customer A.
   */
  comment?: string;
  /**
   * @remarks
   * The name of the receiver.
   * 
   * @example
   * receiver_name
   */
  receiverName?: string;
  /**
   * @remarks
   * The ID of the receiver\\"s account.
   * 
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

