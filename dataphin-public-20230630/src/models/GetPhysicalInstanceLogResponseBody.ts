// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalInstanceLogResponseBodyTaskrunLogList extends $dara.Model {
  /**
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @example
   * 2024-05-30 16:48:13
   */
  endTime?: string;
  /**
   * @example
   * xx
   */
  logContent?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * tr_23231
   */
  taskrunId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      logContent: 'LogContent',
      startTime: 'StartTime',
      status: 'Status',
      taskrunId: 'TaskrunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      endTime: 'string',
      logContent: 'string',
      startTime: 'string',
      status: 'string',
      taskrunId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceLogResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  taskrunLogList?: GetPhysicalInstanceLogResponseBodyTaskrunLogList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskrunLogList: 'TaskrunLogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskrunLogList: { 'type': 'array', 'itemType': GetPhysicalInstanceLogResponseBodyTaskrunLogList },
    };
  }

  validate() {
    if(Array.isArray(this.taskrunLogList)) {
      $dara.Model.validateArray(this.taskrunLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

