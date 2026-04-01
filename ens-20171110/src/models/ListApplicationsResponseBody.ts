// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyApplicationsApplicationAppListApp extends $dara.Model {
  appId?: string;
  appInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationAppList extends $dara.Model {
  app?: ListApplicationsResponseBodyApplicationsApplicationAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplicationAppListApp },
    };
  }

  validate() {
    if(Array.isArray(this.app)) {
      $dara.Model.validateArray(this.app);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplication extends $dara.Model {
  appList?: ListApplicationsResponseBodyApplicationsApplicationAppList;
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: ListApplicationsResponseBodyApplicationsApplicationAppList,
      clusterName: 'string',
    };
  }

  validate() {
    if(this.appList && typeof (this.appList as any).validate === 'function') {
      (this.appList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $dara.Model {
  application?: ListApplicationsResponseBodyApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplication },
    };
  }

  validate() {
    if(Array.isArray(this.application)) {
      $dara.Model.validateArray(this.application);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  applications?: ListApplicationsResponseBodyApplications;
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
   * The ID of the request.
   * 
   * @example
   * 50373E71-7710-4620-8AAB-133CCE49451C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: ListApplicationsResponseBodyApplications,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.applications && typeof (this.applications as any).validate === 'function') {
      (this.applications as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

