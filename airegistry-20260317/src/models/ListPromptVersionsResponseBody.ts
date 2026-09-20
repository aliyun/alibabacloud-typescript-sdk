// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptVersionsResponseBodyDataPageItems extends $dara.Model {
  /**
   * @remarks
   * The commit message of the prompt version.
   * 
   * @example
   * This is a test version
   */
  commitMsg?: string;
  /**
   * @remarks
   * The modification date.
   * 
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtModified?: number;
  /**
   * @remarks
   * The unique identifier of the prompt.
   * 
   * @example
   * customer-service-qa
   */
  promptKey?: string;
  /**
   * @remarks
   * The creator of the prompt version.
   * 
   * @example
   * admin
   */
  srcUser?: string;
  /**
   * @remarks
   * The status of the prompt version.
   * 
   * @example
   * draft
   */
  status?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 0.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'CommitMsg',
      gmtModified: 'GmtModified',
      promptKey: 'PromptKey',
      srcUser: 'SrcUser',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
      gmtModified: 'number',
      promptKey: 'string',
      srcUser: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromptVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of prompt versions.
   */
  pageItems?: ListPromptVersionsResponseBodyDataPageItems[];
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of available pages.
   * 
   * @example
   * 1
   */
  pagesAvailable?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageItems: 'PageItems',
      pageNumber: 'PageNumber',
      pagesAvailable: 'PagesAvailable',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageItems: { 'type': 'array', 'itemType': ListPromptVersionsResponseBodyDataPageItems },
      pageNumber: 'number',
      pagesAvailable: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageItems)) {
      $dara.Model.validateArray(this.pageItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromptVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListPromptVersionsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9E87E66-9EF0-5C10-A5E6-924020A0C9B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPromptVersionsResponseBodyData,
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

