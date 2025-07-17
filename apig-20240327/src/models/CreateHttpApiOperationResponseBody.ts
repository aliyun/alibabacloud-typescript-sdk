// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpApiOperationResponseBodyDataOperations extends $dara.Model {
  /**
   * @remarks
   * Operation ID.
   * 
   * @example
   * op-xxx
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Operation information.
   */
  operations?: CreateHttpApiOperationResponseBodyDataOperations[];
  static names(): { [key: string]: string } {
    return {
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operations: { 'type': 'array', 'itemType': CreateHttpApiOperationResponseBodyDataOperations },
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Operation information.
   */
  data?: CreateHttpApiOperationResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateHttpApiOperationResponseBodyData,
      message: 'string',
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

