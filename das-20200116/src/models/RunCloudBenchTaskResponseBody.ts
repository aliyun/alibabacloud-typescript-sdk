// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCloudBenchTaskResponseBodyDataPreCheckItem extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The detailed information of the check item.
   * 
   * @example
   * "Data": { "total": 1, "list":[...] }, "Code": 200, "Success": true }
   */
  details?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The name of the check item. Valid values:
   * 
   * * **SqlArchiveStatusChecker**: checks whether SQL Explorer is available.
   * * **BenchClientEnvChecker**: checks whether the runtime environment for programs on the stress testing client is available.
   * * **SpecChecker**: checks whether the destination instance type and the instance type of the stress testing client support this API operation.
   * * **SourceInstanceChecker**: checks whether the account of the source instance is available and whether the source instance is connected to the destination instance.
   * * **BenchTargetChecker**: checks whether the account of the destination instance is available and whether the source instance is connected to the destination instance.
   * 
   * @example
   * BenchTargetChecker
   */
  name?: string;
  /**
   * @remarks
   * The sequence number of the check item. Valid values: **0** to **10**.
   * 
   * @example
   * 0
   */
  order?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **SUCCESS**: The task is successful.
   * *   **IGNORED**: The task is ignored.
   * *   **RUNNING**: The task is running.
   * *   **EXCEPTION**: An error occurred.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      message: 'Message',
      name: 'Name',
      order: 'Order',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      message: 'string',
      name: 'string',
      order: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudBenchTaskResponseBodyData extends $dara.Model {
  preCheckItem?: RunCloudBenchTaskResponseBodyDataPreCheckItem[];
  static names(): { [key: string]: string } {
    return {
      preCheckItem: 'PreCheckItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckItem: { 'type': 'array', 'itemType': RunCloudBenchTaskResponseBodyDataPreCheckItem },
    };
  }

  validate() {
    if(Array.isArray(this.preCheckItem)) {
      $dara.Model.validateArray(this.preCheckItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudBenchTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information, including the error codes and the number of returned entries.
   */
  data?: RunCloudBenchTaskResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RunCloudBenchTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

