// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsResponseBodyDataScripts extends $dara.Model {
  /**
   * @remarks
   * The concurrency.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1773228988000
   */
  createdTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Used for testing
   */
  description?: string;
  /**
   * @remarks
   * The draft version ID.
   * 
   * @example
   * efbafa38-336d-4eb0-865e-c16c97a91773
   */
  draftVersionId?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * Navigation test scenario
   */
  name?: string;
  /**
   * @remarks
   * The NLU invocation method.
   * 
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The NLU engine.
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @remarks
   * The number.
   * 
   * @example
   * 13816111993
   */
  number?: string;
  /**
   * @remarks
   * The published version ID.
   * 
   * @example
   * efbafa38-336d-4eb0-865e-c16c97a91774
   */
  publishedVersionId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * efbafa38-336d-4eb0-865e-c16c97a91772
   */
  scriptId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of scenarios.
   */
  scripts?: ListScriptsResponseBodyDataScripts[];
  /**
   * @remarks
   * The total count.
   * 
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
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated result of the scenario list.
   */
  data?: ListScriptsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
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

