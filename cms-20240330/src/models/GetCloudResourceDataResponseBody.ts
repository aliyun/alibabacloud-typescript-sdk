// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudResourceDataResponseBodyResponseStatusStatusItem extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success,ExecuteTimeout,UModelNotExist
   */
  code?: string;
  /**
   * @remarks
   * The status level.
   * 
   * @example
   * Info,Warn,Error
   */
  level?: string;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The suggestion when an execution error occurs.
   * 
   * @example
   * Try to reduce the query scope or increase timeout limit, then retry
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      level: 'level',
      message: 'message',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudResourceDataResponseBodyResponseStatus extends $dara.Model {
  /**
   * @remarks
   * The information during execution.
   * 
   * @example
   * {}
   */
  executionStates?: string;
  /**
   * @remarks
   * The status level.
   * 
   * @example
   * Info,Warn,Error
   */
  level?: string;
  /**
   * @remarks
   * The execution result.
   * 
   * @example
   * Success,PartialSuccess,Error
   */
  result?: string;
  /**
   * @remarks
   * The retry policy.
   * 
   * @example
   * None,Once,Continuous
   */
  retryPolicy?: string;
  /**
   * @remarks
   * The detailed status information.
   */
  statusItem?: GetCloudResourceDataResponseBodyResponseStatusStatusItem[];
  static names(): { [key: string]: string } {
    return {
      executionStates: 'executionStates',
      level: 'level',
      result: 'result',
      retryPolicy: 'retryPolicy',
      statusItem: 'statusItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionStates: 'string',
      level: 'string',
      result: 'string',
      retryPolicy: 'string',
      statusItem: { 'type': 'array', 'itemType': GetCloudResourceDataResponseBodyResponseStatusStatusItem },
    };
  }

  validate() {
    if(Array.isArray(this.statusItem)) {
      $dara.Model.validateArray(this.statusItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudResourceDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total list of returned data.
   */
  data?: string[][];
  /**
   * @remarks
   * The list of headers.
   */
  header?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The result status.
   */
  responseStatus?: GetCloudResourceDataResponseBodyResponseStatus;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      header: 'header',
      requestId: 'requestId',
      responseStatus: 'responseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      header: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      responseStatus: GetCloudResourceDataResponseBodyResponseStatus,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.header)) {
      $dara.Model.validateArray(this.header);
    }
    if(this.responseStatus && typeof (this.responseStatus as any).validate === 'function') {
      (this.responseStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

