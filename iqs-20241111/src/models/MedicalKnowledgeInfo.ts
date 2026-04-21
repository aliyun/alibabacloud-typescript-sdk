// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalKnowledgeInfo extends $dara.Model {
  content?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

