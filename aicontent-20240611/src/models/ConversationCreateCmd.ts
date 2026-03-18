// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversationCreateCmd extends $dara.Model {
  chatData?: string;
  modelIds?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chatData: 'chatData',
      modelIds: 'modelIds',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatData: 'string',
      modelIds: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

