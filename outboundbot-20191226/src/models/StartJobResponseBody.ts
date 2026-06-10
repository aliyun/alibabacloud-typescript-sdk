// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartJobResponseBodyCallIds extends $dara.Model {
  /**
   * @remarks
   * Third-party contact ID
   * 
   * @example
   * c93cdd1c-f9b5-4758-be43-7a237a7eaa1d
   */
  key?: string;
  /**
   * @remarks
   * Call ID for the task
   * 
   * @example
   * 62229628-45d8-41bd-a80f-6e4c0a39f79b
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBodyTaskIds extends $dara.Model {
  /**
   * @remarks
   * Third-party contact ID
   * 
   * @example
   * c93cdd1c-f9b5-4758-be43-7a237a7eaa1d
   */
  key?: string;
  /**
   * @remarks
   * Outbound call task ID
   * 
   * @example
   * 62229628-45d8-41bd-a80f-6e4c0a39f79b
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of call IDs
   */
  callIds?: StartJobResponseBodyCallIds[];
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8a621aa1-d2e7-43f3-b54d-8830af73c468
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded. true means success. false means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Mapping between third-party contact IDs and outbound call task IDs
   */
  taskIds?: StartJobResponseBodyTaskIds[];
  static names(): { [key: string]: string } {
    return {
      callIds: 'CallIds',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callIds: { 'type': 'array', 'itemType': StartJobResponseBodyCallIds },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskIds: { 'type': 'array', 'itemType': StartJobResponseBodyTaskIds },
    };
  }

  validate() {
    if(Array.isArray(this.callIds)) {
      $dara.Model.validateArray(this.callIds);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

