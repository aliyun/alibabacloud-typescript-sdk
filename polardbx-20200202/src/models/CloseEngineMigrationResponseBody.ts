// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseEngineMigrationResponseBodyData extends $dara.Model {
  /**
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  /**
   * @example
   * 2209883
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

export class CloseEngineMigrationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CloseEngineMigrationResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * *****
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CloseEngineMigrationResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      successResponse: 'string',
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

