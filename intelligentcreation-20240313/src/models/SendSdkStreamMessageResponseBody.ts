// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSdkStreamMessageResponseBody extends $dara.Model {
  commonStreamMessage?: string;
  static names(): { [key: string]: string } {
    return {
      commonStreamMessage: 'commonStreamMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonStreamMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

