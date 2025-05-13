// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptDataworksEventRequest extends $dara.Model {
  /**
   * @remarks
   * The event content in the message.
   * 
   * @example
   * {"eventCode":"d****ct","projectId":"8***6","tenantId":4*******8,"operator":"115*****901"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The message ID. You can obtain the ID from the message received when an extension point event is triggered. For more information about the message format, see [Message formats](https://help.aliyun.com/document_detail/436911.html).
   * 
   * @example
   * 539306ba-*****-41a0-****-6dc81060985c
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      messageId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

