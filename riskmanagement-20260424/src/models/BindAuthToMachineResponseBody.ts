// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAuthToMachineResponseBodyDataBody extends $dara.Model {
  bindCount?: number;
  insufficientCoreCount?: number;
  insufficientEcsCount?: number;
  requestId?: string;
  resultCode?: number;
  unBindCount?: number;
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      insufficientCoreCount: 'InsufficientCoreCount',
      insufficientEcsCount: 'InsufficientEcsCount',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      unBindCount: 'UnBindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      insufficientCoreCount: 'number',
      insufficientEcsCount: 'number',
      requestId: 'string',
      resultCode: 'number',
      unBindCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAuthToMachineResponseBodyData extends $dara.Model {
  body?: BindAuthToMachineResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: BindAuthToMachineResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAuthToMachineResponseBody extends $dara.Model {
  code?: string;
  data?: BindAuthToMachineResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BindAuthToMachineResponseBodyData,
      message: 'string',
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

