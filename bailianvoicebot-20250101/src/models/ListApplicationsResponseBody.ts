// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyDataApplications extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * The concurrency settings.
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
   * 1729909690
   */
  createdTime?: number;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * Describe this application
   */
  description?: string;
  /**
   * @remarks
   * The draft version ID.
   * 
   * @example
   * 20904943-f711-494f-9f1f-e7f340f37707
   */
  draftVersionId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Test001
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
   * PROMPTS
   */
  nluEngine?: string;
  /**
   * @remarks
   * The published version ID.
   * 
   * @example
   * 20904943-f711-494f-9f1f-e7f340f37707
   */
  publishedVersionId?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1729909348
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      concurrency: 'Concurrency',
      createdTime: 'CreatedTime',
      description: 'Description',
      draftVersionId: 'DraftVersionId',
      name: 'Name',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
      publishedVersionId: 'PublishedVersionId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      concurrency: 'number',
      createdTime: 'number',
      description: 'string',
      draftVersionId: 'string',
      name: 'string',
      nluAccessType: 'string',
      nluEngine: 'string',
      publishedVersionId: 'string',
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

export class ListApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application list information.
   */
  applications?: ListApplicationsResponseBodyDataApplications[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplications },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListApplicationsResponseBodyData;
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
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D771A1B6-3D5F-174A-BEE1-98CE1000D337
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListApplicationsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

