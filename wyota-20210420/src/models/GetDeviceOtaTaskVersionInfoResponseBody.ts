// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOtaTaskVersionInfoResponseBodyData extends $dara.Model {
  releaseNote?: string;
  size?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      size: 'Size',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      size: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaTaskVersionInfoResponseBody extends $dara.Model {
  code?: string;
  data?: GetDeviceOtaTaskVersionInfoResponseBodyData;
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
      data: GetDeviceOtaTaskVersionInfoResponseBodyData,
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

