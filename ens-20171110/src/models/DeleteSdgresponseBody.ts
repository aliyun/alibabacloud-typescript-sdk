// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSDGResponseBodyDataResultFailedItemsItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared data group (SDG).
   * 
   * @example
   * sdg-dfet5vvvgy
   */
  sdgId?: string;
  static names(): { [key: string]: string } {
    return {
      sdgId: 'SdgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSDGResponseBodyDataResultFailedItems extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * sdg not found
   */
  errMessage?: string;
  /**
   * @remarks
   * Description
   */
  item?: DeleteSDGResponseBodyDataResultFailedItemsItem;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      item: DeleteSDGResponseBodyDataResultFailedItemsItem,
    };
  }

  validate() {
    if(this.item && typeof (this.item as any).validate === 'function') {
      (this.item as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSDGResponseBodyDataResult extends $dara.Model {
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
  failedItems?: DeleteSDGResponseBodyDataResultFailedItems[];
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
      failedItems: { 'type': 'array', 'itemType': DeleteSDGResponseBodyDataResultFailedItems },
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

export class DeleteSDGResponseBodyData extends $dara.Model {
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
  result?: DeleteSDGResponseBodyDataResult;
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
      result: DeleteSDGResponseBodyDataResult,
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

export class DeleteSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: DeleteSDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86A6D421-A0C7-4C01-8648-47377CA6A2CE
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
      data: DeleteSDGResponseBodyData,
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

