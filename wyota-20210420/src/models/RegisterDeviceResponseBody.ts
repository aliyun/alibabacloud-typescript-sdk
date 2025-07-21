// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterDeviceResponseBodyData extends $dara.Model {
  newUpgrade?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      newUpgrade: 'NewUpgrade',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newUpgrade: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBody extends $dara.Model {
  code?: string;
  data?: RegisterDeviceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RegisterDeviceResponseBodyData,
      message: 'string',
      requestId: 'string',
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

