// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyDataApplications extends $dara.Model {
  /**
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @example
   * 1729909690
   */
  createdTime?: number;
  description?: string;
  /**
   * @example
   * 20904943-f711-494f-9f1f-e7f340f37707
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
   * PROMPTS
   */
  nluEngine?: string;
  /**
   * @example
   * 20904943-f711-494f-9f1f-e7f340f37707
   */
  publishedVersionId?: string;
  /**
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
  applications?: ListApplicationsResponseBodyDataApplications[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1000
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListApplicationsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
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

