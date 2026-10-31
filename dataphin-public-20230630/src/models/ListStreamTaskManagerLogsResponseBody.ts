// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamTaskManagerLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The log file name. This name can be used as the logName input parameter for the logContent operation.
   * 
   * @example
   * flink--standalonesession-0-dataphin-session-7db678957dc449aab0086b931c9f8218-jobmanager.log
   */
  logName?: string;
  /**
   * @remarks
   * The last modified time in milliseconds.
   * 
   * @example
   * 1792033500000
   */
  mtime?: number;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 1048576
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      logName: 'LogName',
      mtime: 'Mtime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logName: 'string',
      mtime: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStreamTaskManagerLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of log files for the specified TaskManager.
   */
  data?: ListStreamTaskManagerLogsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListStreamTaskManagerLogsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

