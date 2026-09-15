// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicTemplateStatusReason extends $dara.Model {
  message?: string;
  step?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      step: 'step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

