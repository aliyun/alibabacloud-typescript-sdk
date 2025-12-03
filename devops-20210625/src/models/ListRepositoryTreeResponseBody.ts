// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryTreeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 76c3f251f414ac31f2e01faf6f2008a9d756a437
   */
  id?: string;
  /**
   * @example
   * false
   */
  isLFS?: boolean;
  /**
   * @example
   * 100644
   */
  mode?: string;
  /**
   * @example
   * test-codeup
   */
  name?: string;
  /**
   * @example
   * test-codeup
   */
  path?: string;
  /**
   * @example
   * blob
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isLFS: 'isLFS',
      mode: 'mode',
      name: 'name',
      path: 'path',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isLFS: 'boolean',
      mode: 'string',
      name: 'string',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTreeResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 6557983C-FB08-51A9-AC5A-A7A0D0950A07
   */
  requestId?: string;
  result?: ListRepositoryTreeResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListRepositoryTreeResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

