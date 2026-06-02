// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartJobResponseBodyCallIds extends $dara.Model {
  /**
   * @example
   * c93cdd1c-f9b5-4758-be43-7a237a7eaa1d
   */
  key?: string;
  /**
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
   * @example
   * c93cdd1c-f9b5-4758-be43-7a237a7eaa1d
   */
  key?: string;
  /**
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
  callIds?: StartJobResponseBodyCallIds[];
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 8a621aa1-d2e7-43f3-b54d-8830af73c468
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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

