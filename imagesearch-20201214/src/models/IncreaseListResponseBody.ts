// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseListResponseBodyDataIncrementsInstance extends $dara.Model {
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * bucketName
   */
  bucketName?: string;
  /**
   * @remarks
   * The callback address.
   * 
   * @example
   * http://xxxxx
   */
  callbackAddress?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The address where you can download the result. The address is valid for 2 hours.
   * 
   * @example
   * https://imagesearchname.oss-cn-shanghai.aliyuncs.com/xxx
   */
  errorUrl?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 500
   */
  id?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * sucess
   */
  msg?: string;
  /**
   * @remarks
   * The absolute path to the increment.meta file in the bucket. The path must start with a forward slash (/) and cannot end with a forward slash (/).
   * 
   * @example
   * /xx/xx
   */
  path?: string;
  /**
   * @remarks
   * The status of the batch task.
   * 
   * *   PROCESSING: in progress
   * *   FAIL: failed
   * *   SUCCESS: successful
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was created. Unit: milliseconds.
   * 
   * @example
   * 1629095713000
   */
  utcCreate?: string;
  /**
   * @remarks
   * The time when the task was updated. Unit: milliseconds.
   * 
   * @example
   * 1629095760000
   */
  utcModified?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      callbackAddress: 'CallbackAddress',
      code: 'Code',
      errorUrl: 'ErrorUrl',
      id: 'Id',
      msg: 'Msg',
      path: 'Path',
      status: 'Status',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      callbackAddress: 'string',
      code: 'string',
      errorUrl: 'string',
      id: 'number',
      msg: 'string',
      path: 'string',
      status: 'string',
      utcCreate: 'string',
      utcModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyDataIncrements extends $dara.Model {
  instance?: IncreaseListResponseBodyDataIncrementsInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': IncreaseListResponseBodyDataIncrementsInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of batch tasks.
   */
  increments?: IncreaseListResponseBodyDataIncrements;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      increments: 'Increments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      increments: IncreaseListResponseBodyDataIncrements,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.increments && typeof (this.increments as any).validate === 'function') {
      (this.increments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the batch task.
   */
  data?: IncreaseListResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
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
      data: IncreaseListResponseBodyData,
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

