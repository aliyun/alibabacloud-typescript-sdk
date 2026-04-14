// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTagTagInfo extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTag extends $dara.Model {
  tagInfo?: DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTagTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTagTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp extends $dara.Model {
  appDescription?: string;
  appId?: number;
  appName?: string;
  authVaildTime?: string;
  authorizationSource?: string;
  authorizedTime?: string;
  description?: string;
  operator?: string;
  stageAlias?: string;
  stageName?: string;
  tag?: DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTag;
  static names(): { [key: string]: string } {
    return {
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      authVaildTime: 'AuthVaildTime',
      authorizationSource: 'AuthorizationSource',
      authorizedTime: 'AuthorizedTime',
      description: 'Description',
      operator: 'Operator',
      stageAlias: 'StageAlias',
      stageName: 'StageName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDescription: 'string',
      appId: 'number',
      appName: 'string',
      authVaildTime: 'string',
      authorizationSource: 'string',
      authorizedTime: 'string',
      description: 'string',
      operator: 'string',
      stageAlias: 'string',
      stageName: 'string',
      tag: DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTag,
    };
  }

  validate() {
    if(this.tag && typeof (this.tag as any).validate === 'function') {
      (this.tag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsResponseBodyAuthorizedApps extends $dara.Model {
  authorizedApp?: DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp[];
  static names(): { [key: string]: string } {
    return {
      authorizedApp: 'AuthorizedApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApp: { 'type': 'array', 'itemType': DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp },
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

export class DescribeAuthorizedAppsResponseBody extends $dara.Model {
  authorizedApps?: DescribeAuthorizedAppsResponseBodyAuthorizedApps;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6E46F10-F26C-4AA0-BB69-FE2743D9AE62
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
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
      authorizedApps: DescribeAuthorizedAppsResponseBodyAuthorizedApps,
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

