// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSortScriptFileResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The script content that is encoded in the Base64 format.
   * 
   * @example
   * YWJjZGVmZw==
   */
  content?: string;
  /**
   * @remarks
   * The time when the script was created.
   * 
   * @example
   * 2020-04-02 20:21:14
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the script was last modified.
   * 
   * @example
   * 2020-04-02 21:21:14
   */
  modifyTime?: string;
  /**
   * @remarks
   * The version of the script content.
   * 
   * @example
   * 123456
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      modifyTime: 'modifyTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      modifyTime: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the sort script.
   */
  result?: GetSortScriptFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSortScriptFileResponseBodyResult,
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

