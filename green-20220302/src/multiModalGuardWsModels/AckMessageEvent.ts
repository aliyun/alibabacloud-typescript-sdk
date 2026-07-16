// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AckMessageEventData extends $dara.Model {
  triggered?: boolean;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      triggered: 'Triggered',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggered: 'boolean',
      msgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AckMessageEvent extends $dara.Model {
  code?: number;
  message?: string;
  data?: AckMessageEventData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      data: AckMessageEventData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

