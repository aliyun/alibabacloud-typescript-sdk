// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRunResponseBodyDataContentCardCallback extends $dara.Model {
  content?: string;
  templateId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      templateId: 'templateId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      templateId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

