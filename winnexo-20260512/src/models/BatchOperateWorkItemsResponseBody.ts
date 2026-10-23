// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchOperateWorkItemsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The reason for skipping or failure.
   * 
   * @example
   * example
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the work item.
   * 
   * @example
   * example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      success: 'success',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      success: 'boolean',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchOperateWorkItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The results for each item. The order of the results matches the order of the items in the request.
   * 
   * @example
   * example
   */
  items?: BatchOperateWorkItemsResponseBodyItems[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of skipped or failed operations.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful operations.
   * 
   * @example
   * 1
   */
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      skipped: 'skipped',
      succeeded: 'succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': BatchOperateWorkItemsResponseBodyItems },
      message: 'string',
      requestId: 'string',
      skipped: 'number',
      succeeded: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

