// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTargetsResponseBodyDataErrorEntries extends $dara.Model {
  /**
   * @remarks
   * The ID of the event body that failed to be processed.
   * 
   * @example
   * target5
   */
  entryId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * EventRuleTargetIdDuplicate
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The id of event target is duplicate!
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      errorCode: 'string',
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

export class DeleteTargetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the event body that failed to be processed.
   */
  errorEntries?: DeleteTargetsResponseBodyDataErrorEntries[];
  /**
   * @remarks
   * The number of event bodies that failed to be processed. Valid values: 0: No event bodies failed to be processed. An integer other than 0: the number of event bodies that failed to be processed.
   * 
   * @example
   * 0
   */
  errorEntriesCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorEntries: 'ErrorEntries',
      errorEntriesCount: 'ErrorEntriesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorEntries: { 'type': 'array', 'itemType': DeleteTargetsResponseBodyDataErrorEntries },
      errorEntriesCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorEntries)) {
      $dara.Model.validateArray(this.errorEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The code 200 indicates that the request was successful. Other codes indicate that the request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DeleteTargetsResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * EventBusNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78FA9EAC-F0C0-58B0-871E-9F9756CE1D29
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
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
      data: DeleteTargetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

