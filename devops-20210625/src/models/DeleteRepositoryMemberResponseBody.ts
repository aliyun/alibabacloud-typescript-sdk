// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRepositoryMemberResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 30
   */
  accessLevel?: number;
  /**
   * @example
   * 2022-03-12 12:00:00
   */
  createAt?: string;
  /**
   * @example
   * 30815
   */
  id?: number;
  /**
   * @example
   * 2080398
   */
  sourceId?: number;
  /**
   * @example
   * Project
   */
  sourceType?: string;
  /**
   * @example
   * 2022-03-12 12:00:00
   */
  updateAt?: string;
  /**
   * @example
   * 19280
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      createAt: 'createAt',
      id: 'id',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
      updateAt: 'updateAt',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      createAt: 'string',
      id: 'number',
      sourceId: 'number',
      sourceType: 'string',
      updateAt: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 0E1BCF81-51E6-59D4-8D55-FF945111127A
   */
  requestId?: string;
  result?: DeleteRepositoryMemberResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryMemberResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

