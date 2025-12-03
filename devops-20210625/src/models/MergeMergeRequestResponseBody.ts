// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeMergeRequestResponseBodyResult extends $dara.Model {
  bizId?: string;
  localId?: number;
  mergedRevision?: string;
  projectId?: number;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      localId: 'localId',
      mergedRevision: 'mergedRevision',
      projectId: 'projectId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      localId: 'number',
      mergedRevision: 'string',
      projectId: 'number',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBody extends $dara.Model {
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
   * 9ED5E382-3A58-51E4-8A81-CE25D1756025
   */
  requestId?: string;
  result?: MergeMergeRequestResponseBodyResult;
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
      result: MergeMergeRequestResponseBodyResult,
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

