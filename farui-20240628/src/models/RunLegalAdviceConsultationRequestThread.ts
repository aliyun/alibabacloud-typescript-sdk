// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLegalAdviceConsultationRequestThreadMessages } from "./RunLegalAdviceConsultationRequestThreadMessages";


export class RunLegalAdviceConsultationRequestThread extends $dara.Model {
  messages?: RunLegalAdviceConsultationRequestThreadMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunLegalAdviceConsultationRequestThreadMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

