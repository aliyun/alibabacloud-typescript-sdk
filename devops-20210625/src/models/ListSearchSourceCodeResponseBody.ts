// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchSourceCodeResponseBodyResultHighlightTextMap extends $dara.Model {
  /**
   * @example
   * xxx
   */
  clob?: string;
  /**
   * @example
   * test.java
   */
  fileName?: string;
  /**
   * @example
   * java
   */
  language?: string;
  /**
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      clob: 'clob',
      fileName: 'fileName',
      language: 'language',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clob: 'string',
      fileName: 'string',
      language: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchSourceCodeResponseBodyResultSource extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * 2022-10-10 10:00:00
   */
  checkinDate?: string;
  /**
   * @example
   * test_utils.js
   */
  fileName?: string;
  /**
   * @example
   * spec/frontend/snippets/test_utils.js
   */
  filePath?: string;
  /**
   * @example
   * JavaScript
   */
  language?: string;
  /**
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @example
   * codeup/test-repo
   */
  repoPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      checkinDate: 'checkinDate',
      fileName: 'fileName',
      filePath: 'filePath',
      language: 'language',
      organizationId: 'organizationId',
      repoPath: 'repoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      checkinDate: 'string',
      fileName: 'string',
      filePath: 'string',
      language: 'string',
      organizationId: 'string',
      repoPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchSourceCodeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 60d54f3daccf2bbd6659f3ad/gitlabhq/master/spec/frontend/snippets/test_utils.js
   */
  docId?: string;
  highlightTextMap?: ListSearchSourceCodeResponseBodyResultHighlightTextMap;
  source?: ListSearchSourceCodeResponseBodyResultSource;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      highlightTextMap: 'highlightTextMap',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      highlightTextMap: ListSearchSourceCodeResponseBodyResultHighlightTextMap,
      source: ListSearchSourceCodeResponseBodyResultSource,
    };
  }

  validate() {
    if(this.highlightTextMap && typeof (this.highlightTextMap as any).validate === 'function') {
      (this.highlightTextMap as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchSourceCodeResponseBody extends $dara.Model {
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
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: ListSearchSourceCodeResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSearchSourceCodeResponseBodyResult },
      success: 'boolean',
      total: 'number',
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

