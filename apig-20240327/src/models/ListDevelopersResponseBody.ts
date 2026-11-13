// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevelopersResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the developer. You can use this ID to locate the developer in API operations such as SetHiMarketDeveloperStatus and DeleteHiMarketDeveloper.
   * 
   * @example
   * dev-xxxxxxxx
   */
  developerId?: string;
  /**
   * @remarks
   * The ID of the portal to which the developer belongs. You can use this ID to locate the portal in API operations such as GetPortal, UpdatePortal, and DeletePortal.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  /**
   * @remarks
   * The status of the developer. Valid values: PENDING, APPROVED, and REJECTED.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @remarks
   * The logon username of the developer.
   * 
   * @example
   * developer-demo
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      developerId: 'developerId',
      portalId: 'portalId',
      status: 'status',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developerId: 'string',
      portalId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevelopersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of developers.
   */
  content?: ListDevelopersResponseBodyDataContent[];
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListDevelopersResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevelopersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListDevelopersResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries on the current page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that the last page is reached.
   * 
   * @example
   * token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDevelopersResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

