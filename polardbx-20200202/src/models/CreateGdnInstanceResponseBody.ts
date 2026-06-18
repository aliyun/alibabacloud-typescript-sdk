// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGdnInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2209883
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGdnInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance details.
   */
  data?: CreateGdnInstanceResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * > This parameter is empty when the request succeeds. If the request fails, an error message is returned, such as an error code.
   * 
   * @example
   * ****
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0DBA1657-7607-56D6-BB6D-641BF17CCFDB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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
      data: CreateGdnInstanceResponseBodyData,
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

