// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileBlobsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  content?: string;
  size?: number;
  /**
   * @example
   * 65535
   */
  totalLines?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      size: 'size',
      totalLines: 'totalLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      size: 'number',
      totalLines: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * F590C9D8-E908-5B6C-95AC-56B7E8011FFA
   */
  requestId?: string;
  result?: GetFileBlobsResponseBodyResult;
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
      result: GetFileBlobsResponseBodyResult,
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

