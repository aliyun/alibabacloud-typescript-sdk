// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrossAccountsResponseBodyData extends $dara.Model {
  /**
   * @example
   * t-0000e4w0u1v592zdf6s7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrossAccountsResponseBody extends $dara.Model {
  data?: UpdateCrossAccountsResponseBodyData;
  /**
   * @example
   * 8724BC18-904D-5A0D-BFF4-F0554F0037E7
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
      data: UpdateCrossAccountsResponseBodyData,
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

