// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScenegroupResponseBody extends $dara.Model {
  /**
   * @example
   * cid1324wwwerxxx
   */
  openConversationId?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'openConversationId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

