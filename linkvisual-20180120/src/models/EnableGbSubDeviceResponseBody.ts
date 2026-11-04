// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableGbSubDeviceResponseBodyData extends $dara.Model {
  deviceName?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableGbSubDeviceResponseBody extends $dara.Model {
  code?: string;
  data?: EnableGbSubDeviceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnableGbSubDeviceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

