// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSQLEvaluateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      slinkTaskId: 'SlinkTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slinkTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSQLEvaluateTaskResponseBody extends $dara.Model {
  data?: CreateSQLEvaluateTaskResponseBodyData;
  /**
   * @example
   * *****
   */
  message?: string;
  /**
   * @example
   * 6352AC16-76BF-5135-B1EA-ED49293526E6
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSQLEvaluateTaskResponseBodyData,
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

