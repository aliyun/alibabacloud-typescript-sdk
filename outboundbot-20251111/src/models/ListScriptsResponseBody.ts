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
   * The creation time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Ask the user whether they are satisfied with the service
   */
  description?: string;
  /**
   * @remarks
   * The draft version ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b60
   */
  draftVersionId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Satisfaction Survey
   */
  name?: string;
  /**
   * @remarks
   * The NLU access type.
   * 
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The NLU engine type.
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @remarks
   * The phone number bound to the scenario.
   * 
   * @example
   * 01057316547
   */
  number?: string;
  /**
   * @remarks
   * The published version ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b41
   */
  publishedVersionId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  scriptId?: string;
  /**
   * @remarks
   * The scenario status.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The update time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
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
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The data list.
   */
  scripts?: ListScriptsResponseBodyDataScripts[];
  /**
   * @remarks
   * The total number of records that match the conditions.
   * 
   * @example
   * 0
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
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
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
   * Instance does not exist. Instance=ob-0987654321
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
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
      success: 'boolean',
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

