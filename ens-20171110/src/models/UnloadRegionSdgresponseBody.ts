// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnloadRegionSDGResponseBodyDataResultFailedItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination node.
   * 
   * @example
   * cn-hangzhou-xxx
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * region not found
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionId: 'DestinationRegionId',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionId: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnloadRegionSDGResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of failed tasks.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * Details about the failed tasks.
   */
  failedItems?: UnloadRegionSDGResponseBodyDataResultFailedItems[];
  /**
   * @remarks
   * The number of successful tasks.
   * 
   * @example
   * 1
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      failedItems: 'FailedItems',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedItems: { 'type': 'array', 'itemType': UnloadRegionSDGResponseBodyDataResultFailedItems },
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedItems)) {
      $dara.Model.validateArray(this.failedItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnloadRegionSDGResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response message. Success is returned for a successful request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The execution result of the synchronization request.
   */
  result?: UnloadRegionSDGResponseBodyDataResult;
  /**
   * @remarks
   * Indicates whether all tasks are successful. Valid values:
   * 
   * *   true: All tasks are successful.
   * *   false: Failed tasks exist.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      result: UnloadRegionSDGResponseBodyDataResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnloadRegionSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: UnloadRegionSDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 125B04C7-3D0D-4245-AF96-14E3758E3F06
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
      data: UnloadRegionSDGResponseBodyData,
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

