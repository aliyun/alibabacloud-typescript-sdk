// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptVersionsResponseBodyDataPageItems extends $dara.Model {
  commitMsg?: string;
  gmtModified?: number;
  promptKey?: string;
  srcUser?: string;
  status?: string;
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
  pageItems?: ListPromptVersionsResponseBodyDataPageItems[];
  pageNumber?: number;
  pagesAvailable?: number;
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
  data?: ListPromptVersionsResponseBodyData;
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

