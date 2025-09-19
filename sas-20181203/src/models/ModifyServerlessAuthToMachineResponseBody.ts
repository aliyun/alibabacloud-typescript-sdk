// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyServerlessAuthToMachineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Result code. Values:
   * - **0**: Success
   * - **1**: Parameter error
   * 
   * @example
   * 0
   */
  resultCode?: number;
  static names(): { [key: string]: string } {
    return {
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServerlessAuthToMachineResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the returned data.
   */
  data?: ModifyServerlessAuthToMachineResponseBodyData;
  /**
   * @remarks
   * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
   * 
   * @example
   * A47F77A1***8CD37050E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyServerlessAuthToMachineResponseBodyData,
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

