// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAirflowResponseBodyRootResponses extends $dara.Model {
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * af-test****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAirflowResponseBodyRoot extends $dara.Model {
  responses?: DeleteAirflowResponseBodyRootResponses[];
  static names(): { [key: string]: string } {
    return {
      responses: 'Responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responses: { 'type': 'array', 'itemType': DeleteAirflowResponseBodyRootResponses },
    };
  }

  validate() {
    if(Array.isArray(this.responses)) {
      $dara.Model.validateArray(this.responses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAirflowResponseBody extends $dara.Model {
  /**
   * @example
   * NOT_FOUND
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance not found.
   */
  message?: string;
  /**
   * @example
   * E0D21075-CD3E-4D98-8264-****
   */
  requestId?: string;
  root?: DeleteAirflowResponseBodyRoot;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      root: DeleteAirflowResponseBodyRoot,
      success: 'boolean',
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

