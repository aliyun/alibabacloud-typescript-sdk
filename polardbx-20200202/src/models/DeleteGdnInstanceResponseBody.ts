// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGdnInstanceResponseBodyData extends $dara.Model {
  /**
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

export class DeleteGdnInstanceResponseBody extends $dara.Model {
  data?: DeleteGdnInstanceResponseBodyData;
  /**
   * @example
   * ****
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14036EBE-CF2E-44DB-ACE9-AC6157D3A6FC
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: DeleteGdnInstanceResponseBodyData,
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

