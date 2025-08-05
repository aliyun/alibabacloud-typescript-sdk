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
   * The error code returned.
   * 
   * @example
   * EventRuleTargetIdDuplicate
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
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
   * The ID of the failed event target.
   */
  errorEntries?: PutTargetsResponseBodyDataErrorEntries[];
  /**
   * @remarks
   * The number of failed event targets. Valid values:
   * 
   * *   0: All event targets succeeded.
   * *   An integer other than 0: indicates the number of failed event targets.
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
   * The response code. Valid values:
   * 
   * *   Success: The call succeeded.
   * *   Other codes: The call failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: PutTargetsResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * The event rule not existed!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FB52207-7621-5292-BDF2-A17E2E984160
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request failed.
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

