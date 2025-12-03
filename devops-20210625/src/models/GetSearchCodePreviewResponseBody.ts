// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSearchCodePreviewResponseBodyResultHighlightTextMap extends $dara.Model {
  /**
   * @example
   * xxx
   */
  clob?: string;
  /**
   * @example
   * test.rb
   */
  fileName?: string;
  /**
   * @example
   * 5ffd468b1e45db3c1cc26ad6
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      clob: 'clob',
      fileName: 'fileName',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clob: 'string',
      fileName: 'string',
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

export class GetSearchCodePreviewResponseBodyResultSource extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * 2022-12-12 12:12:12
   */
  checkinDate?: string;
  /**
   * @example
   * test.rb
   */
  fileName?: string;
  /**
   * @example
   * config/environments/test.rb
   */
  filePath?: string;
  /**
   * @example
   * Ruby
   */
  language?: string;
  /**
   * @example
   * 5f9f9f6122a8c7ff3934f99a
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

export class GetSearchCodePreviewResponseBodyResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  docId?: string;
  highlightTextMap?: GetSearchCodePreviewResponseBodyResultHighlightTextMap;
  source?: GetSearchCodePreviewResponseBodyResultSource;
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
      highlightTextMap: GetSearchCodePreviewResponseBodyResultHighlightTextMap,
      source: GetSearchCodePreviewResponseBodyResultSource,
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

export class GetSearchCodePreviewResponseBody extends $dara.Model {
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
   * A7586FEB-E48D-5579-983F-74981FBFF627
   */
  requestId?: string;
  result?: GetSearchCodePreviewResponseBodyResult;
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
      result: GetSearchCodePreviewResponseBodyResult,
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

