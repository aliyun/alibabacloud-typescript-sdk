// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLifecycleResponseBodyLifecycle extends $dara.Model {
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Creating
   * *   SaveFailed: The instance image failed to be saved.
   * *   Stopped
   * *   Failed
   * *   ResourceAllocating
   * *   Stopping
   * *   Updating
   * *   Saving
   * *   Starting
   * *   Running
   * *   Saved
   * *   EnvPreparing: Preparing environment.
   * *   ArrearStopping: The service is being stopped due to overdue payments.
   * *   Arrearge: The service is stopped due to overdue payments.
   * *   Queuing
   * *   Recovering
   * 
   * @example
   * Starting
   */
  status?: string;
  /**
   * @remarks
   * The reason code that corresponds to an event.
   * 
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @remarks
   * The reason message that corresponds to an event.
   * 
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The time the status was created, specifically the time the instance transitioned to this status (in GMT).
   * 
   * @example
   * 2022-10-21T07:27:44Z
   */
  gmtCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      gmtCreateTime: 'GmtCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      gmtCreateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: All errors, except for parameter validation errors, are internal errors.
   * *   ValidationError: A parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The lifecycle details.
   * 
   * @example
   * [[{"Status":"Creating","GmtCreateTime":"2022-09-19T22:38:00Z","Reason":"","ReasonCode":""}]]
   */
  lifecycle?: GetLifecycleResponseBodyLifecycle[][];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of queried sessions.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lifecycle: 'Lifecycle',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lifecycle: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetLifecycleResponseBodyLifecycle } },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycle)) {
      $dara.Model.validateArray(this.lifecycle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

