// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAuthToMachineResponseBodyDataBody extends $dara.Model {
  /**
   * @example
   * 5
   */
  bindCount?: number;
  /**
   * @example
   * 2
   */
  insufficientCoreCount?: number;
  /**
   * @example
   * 1
   */
  insufficientEcsCount?: number;
  /**
   * @example
   * F799C1E4-D4C6-5964-A6D1-4BA9CCF105F2
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  resultCode?: number;
  /**
   * @example
   * 4
   */
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
  /**
   * @example
   * OK
   */
  code?: string;
  data?: BindAuthToMachineResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * BEE90F8C-EDC2-5394-953B-D07A121612B5
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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

