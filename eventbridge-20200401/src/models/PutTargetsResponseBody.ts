// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutTargetsResponseBodyDataErrorEntries extends $dara.Model {
  /**
   * @remarks
   * The ID of the failed event target.
   * 
   * @example
   * Mlm123456JHd2RsRoKw
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
   * The description of the error.
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

export class PutTargetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details about the event targets that failed to be processed.
   */
  errorEntries?: PutTargetsResponseBodyDataErrorEntries[];
  /**
   * @remarks
   * The number of event targets that failed to be processed. A value of 0 indicates that all event targets were processed successfully.
   * 
   * -
   * 
   * -
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
      errorEntries: { 'type': 'array', 'itemType': PutTargetsResponseBodyDataErrorEntries },
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

export class PutTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * - Success: The request was successful.
   * 
   * - Other values indicate an error. For details, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: PutTargetsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The event rule not existed!
   */
  message?: string;
  /**
   * @remarks
   * The unique ID that Alibaba Cloud generates for the request.
   * 
   * @example
   * 6FB52207-7621-5292-BDF2-A17E2E984160
   */
  requestId?: string;
  /**
   * @remarks
   * Returns true if the operation is successful.
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
      data: PutTargetsResponseBodyData,
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

