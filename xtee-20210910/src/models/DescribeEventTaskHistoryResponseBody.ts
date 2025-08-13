// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventTaskHistoryResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Task code.
   * 
   * @example
   * de_aoxcdy9473
   */
  taskCode?: string;
  /**
   * @remarks
   * Task name
   * 
   * @example
   * 仿真任务
   */
  taskName?: string;
  /**
   * @remarks
   * Task status.
   * 
   * @example
   * SUCCESSFUL
   */
  taskStatus?: string;
  /**
   * @remarks
   * OSS download URL
   * 
   * @example
   * https://xxxxx-oss-xxxxx.xxxxxx.aliyuncs.com/xx/xx/xxx/xxxxxx.csv?Expires=1753433384&OSSAccessKeyId=xxxxxxxxx&Signature=%2F%xxxxxxxxxxxx%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      taskCode: 'taskCode',
      taskName: 'taskName',
      taskStatus: 'taskStatus',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskCode: 'string',
      taskName: 'string',
      taskStatus: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTaskHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeEventTaskHistoryResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeEventTaskHistoryResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

