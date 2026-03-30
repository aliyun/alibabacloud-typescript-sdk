// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsResponseBodyDataScripts extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @example
   * 1773228988000
   */
  createdTime?: number;
  description?: string;
  /**
   * @example
   * efbafa38-336d-4eb0-865e-c16c97a91773
   */
  draftVersionId?: string;
  name?: string;
  /**
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @example
   * 13816111993
   */
  number?: string;
  /**
   * @example
   * efbafa38-336d-4eb0-865e-c16c97a91774
   */
  publishedVersionId?: string;
  /**
   * @example
   * efbafa38-336d-4eb0-865e-c16c97a91772
   */
  scriptId?: string;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @example
   * 1773228988000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      createdTime: 'CreatedTime',
      description: 'Description',
      draftVersionId: 'DraftVersionId',
      name: 'Name',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
      number: 'Number',
      publishedVersionId: 'PublishedVersionId',
      scriptId: 'ScriptId',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      createdTime: 'number',
      description: 'string',
      draftVersionId: 'string',
      name: 'string',
      nluAccessType: 'string',
      nluEngine: 'string',
      number: 'string',
      publishedVersionId: 'string',
      scriptId: 'string',
      status: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  scripts?: ListScriptsResponseBodyDataScripts[];
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scripts: 'Scripts',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      scripts: { 'type': 'array', 'itemType': ListScriptsResponseBodyDataScripts },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scripts)) {
      $dara.Model.validateArray(this.scripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListScriptsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * BA092E9B-3421-5862-BC75-E646B7587531
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListScriptsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

