// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsByApiProductResponseBodyAuthorizedAppsAuthorizedApp extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 110982419
   */
  appId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * APP_02580_DEV
   */
  appName?: string;
  /**
   * @remarks
   * The expiration time of the authorization. The time is in GMT. An empty value indicates that the authorization does not expire.
   * 
   * @example
   * 2023-06-17T03:41:53Z
   */
  authValidTime?: string;
  /**
   * @remarks
   * The time when the authorization was created. The time is in GMT.
   * 
   * @example
   * 2016-07-21T06:17:20Z
   */
  authorizedTime?: string;
  /**
   * @remarks
   * The authorization description.
   * 
   * @example
   * Test share with nsc qiming
   */
  description?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * extra info
   */
  extend?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      authValidTime: 'AuthValidTime',
      authorizedTime: 'AuthorizedTime',
      description: 'Description',
      extend: 'Extend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      authValidTime: 'string',
      authorizedTime: 'string',
      description: 'string',
      extend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsByApiProductResponseBodyAuthorizedApps extends $dara.Model {
  authorizedApp?: DescribeAppsByApiProductResponseBodyAuthorizedAppsAuthorizedApp[];
  static names(): { [key: string]: string } {
    return {
      authorizedApp: 'AuthorizedApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApp: { 'type': 'array', 'itemType': DescribeAppsByApiProductResponseBodyAuthorizedAppsAuthorizedApp },
    };
  }

  validate() {
    if(Array.isArray(this.authorizedApp)) {
      $dara.Model.validateArray(this.authorizedApp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsByApiProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about authorized applications.
   */
  authorizedApps?: DescribeAppsByApiProductResponseBodyAuthorizedApps;
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
   * The request ID.
   * 
   * @example
   * AC866798-62D3-52F4-8AB5-CA149A53984F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizedApps: 'AuthorizedApps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApps: DescribeAppsByApiProductResponseBodyAuthorizedApps,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.authorizedApps && typeof (this.authorizedApps as any).validate === 'function') {
      (this.authorizedApps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

