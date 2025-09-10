// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEntityStoreDataResponseBodyResponseStatusStatusItem extends $dara.Model {
  code?: string;
  level?: string;
  message?: string;
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

export class GetEntityStoreDataResponseBodyResponseStatus extends $dara.Model {
  executionStates?: string;
  level?: string;
  result?: string;
  retryPolicy?: string;
  statusItem?: GetEntityStoreDataResponseBodyResponseStatusStatusItem[];
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
      statusItem: { 'type': 'array', 'itemType': GetEntityStoreDataResponseBodyResponseStatusStatusItem },
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

export class GetEntityStoreDataResponseBody extends $dara.Model {
  data?: string[][];
  header?: string[];
  /**
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  responseStatus?: GetEntityStoreDataResponseBodyResponseStatus;
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
      responseStatus: GetEntityStoreDataResponseBodyResponseStatus,
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

