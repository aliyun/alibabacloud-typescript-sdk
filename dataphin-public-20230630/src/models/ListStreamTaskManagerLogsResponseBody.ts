// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamTaskManagerLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The original name of the log file. This value corresponds to the LogName request parameter of the GetStreamLogContent operation. Pass this value as is.
   * 
   * @example
   * flink--standalonesession-0-dataphin-session-7db678957dc449aab0086b931c9f8218-jobmanager.log
   */
  logName?: string;
  /**
   * @remarks
   * The last modified time of the log file. The value is a timestamp in milliseconds since the UNIX epoch.
   * 
   * @example
   * 1792033500000
   */
  mtime?: number;
  /**
   * @remarks
   * The size of the log file. Unit: bytes.
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
   * The log file entries for the JobManager or TaskManager. You can use the LogName field to retrieve the log content.
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
   * The details of the backend exception.
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
   * Indicates whether the request was successful.
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

