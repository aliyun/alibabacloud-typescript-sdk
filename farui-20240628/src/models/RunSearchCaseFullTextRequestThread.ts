// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchCaseFullTextRequestThreadMessages } from "./RunSearchCaseFullTextRequestThreadMessages";


export class RunSearchCaseFullTextRequestThread extends $dara.Model {
  messages?: RunSearchCaseFullTextRequestThreadMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunSearchCaseFullTextRequestThreadMessages },
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

