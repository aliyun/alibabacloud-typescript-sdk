// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AguiMessage } from "./AguiMessage";
import { QueryAttachment } from "./QueryAttachment";


export class Content extends $dara.Model {
  messageAttachments?: AguiMessage[];
  queryAttachments?: QueryAttachment[];
  textAttachments?: string[];
  static names(): { [key: string]: string } {
    return {
      messageAttachments: 'MessageAttachments',
      queryAttachments: 'QueryAttachments',
      textAttachments: 'TextAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageAttachments: { 'type': 'array', 'itemType': AguiMessage },
      queryAttachments: { 'type': 'array', 'itemType': QueryAttachment },
      textAttachments: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageAttachments)) {
      $dara.Model.validateArray(this.messageAttachments);
    }
    if(Array.isArray(this.queryAttachments)) {
      $dara.Model.validateArray(this.queryAttachments);
    }
    if(Array.isArray(this.textAttachments)) {
      $dara.Model.validateArray(this.textAttachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

