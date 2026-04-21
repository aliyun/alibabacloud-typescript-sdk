// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalAnswerRaDoc extends $dara.Model {
  content?: string;
  rawUrl?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      rawUrl: 'rawUrl',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      rawUrl: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

