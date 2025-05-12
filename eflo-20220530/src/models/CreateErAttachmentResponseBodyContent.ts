// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateErAttachmentResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the network connection instance.
   * 
   * @example
   * er-attachment-ggjbfhqv
   */
  erAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      erAttachmentId: 'ErAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

