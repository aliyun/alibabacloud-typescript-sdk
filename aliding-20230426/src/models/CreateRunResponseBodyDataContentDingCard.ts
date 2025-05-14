// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRunResponseBodyDataContentDingCard extends $dara.Model {
  cardDesc?: string;
  content?: string;
  contentType?: string;
  finished?: boolean;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      cardDesc: 'cardDesc',
      content: 'content',
      contentType: 'contentType',
      finished: 'finished',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardDesc: 'string',
      content: 'string',
      contentType: 'string',
      finished: 'boolean',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

