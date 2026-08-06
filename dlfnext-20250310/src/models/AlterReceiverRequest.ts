// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterReceiverRequest extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * Customer A
   */
  comment?: string;
  /**
   * @remarks
   * The name of the sink.
   * 
   * @example
   * receiver_name
   */
  receiverName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      receiverName: 'receiverName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      receiverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

