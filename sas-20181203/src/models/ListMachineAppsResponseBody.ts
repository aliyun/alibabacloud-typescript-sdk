// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineAppsResponseBodyAppList extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAE application.
   * 
   * @example
   * 5b41f4bf-349f-4263-89b1-9234c034****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the SAE application.
   * 
   * @example
   * app-ubuntu
   */
  appName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  appRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appRegionId: 'AppRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineAppsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 263
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications.
   */
  appList?: ListMachineAppsResponseBodyAppList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListMachineAppsResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': ListMachineAppsResponseBodyAppList },
      pageInfo: ListMachineAppsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appList)) {
      $dara.Model.validateArray(this.appList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

