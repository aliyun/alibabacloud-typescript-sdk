// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMergeRequestChangeTreeResponseBodyResultChangedFilesInfos extends $dara.Model {
  /**
   * @example
   * 10
   */
  addLines?: number;
  /**
   * @example
   * false
   */
  binaryFile?: boolean;
  /**
   * @example
   * 0
   */
  delLines?: number;
  /**
   * @example
   * false
   */
  deletedFile?: boolean;
  /**
   * @example
   * true
   */
  newFile?: boolean;
  /**
   * @example
   * test.txt
   */
  newPath?: string;
  /**
   * @example
   * test.txt
   */
  oldPath?: string;
  /**
   * @example
   * false
   */
  renamedFile?: boolean;
  static names(): { [key: string]: string } {
    return {
      addLines: 'addLines',
      binaryFile: 'binaryFile',
      delLines: 'delLines',
      deletedFile: 'deletedFile',
      newFile: 'newFile',
      newPath: 'newPath',
      oldPath: 'oldPath',
      renamedFile: 'renamedFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addLines: 'number',
      binaryFile: 'boolean',
      delLines: 'number',
      deletedFile: 'boolean',
      newFile: 'boolean',
      newPath: 'string',
      oldPath: 'string',
      renamedFile: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestChangeTreeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 20
   */
  changedFilesCount?: number;
  changedFilesInfos?: GetMergeRequestChangeTreeResponseBodyResultChangedFilesInfos[];
  /**
   * @example
   * 100
   */
  totalAddLines?: number;
  /**
   * @example
   * 50
   */
  totalDelLines?: number;
  static names(): { [key: string]: string } {
    return {
      changedFilesCount: 'changedFilesCount',
      changedFilesInfos: 'changedFilesInfos',
      totalAddLines: 'totalAddLines',
      totalDelLines: 'totalDelLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changedFilesCount: 'number',
      changedFilesInfos: { 'type': 'array', 'itemType': GetMergeRequestChangeTreeResponseBodyResultChangedFilesInfos },
      totalAddLines: 'number',
      totalDelLines: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changedFilesInfos)) {
      $dara.Model.validateArray(this.changedFilesInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestChangeTreeResponseBody extends $dara.Model {
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
   * HC93CE1A-8D7A-13A9-8306-7465DE2E5C0F
   */
  requestId?: string;
  result?: GetMergeRequestChangeTreeResponseBodyResult;
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
      result: GetMergeRequestChangeTreeResponseBodyResult,
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

