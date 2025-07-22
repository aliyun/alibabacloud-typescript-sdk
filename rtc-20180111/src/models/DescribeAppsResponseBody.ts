// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsResponseBodyAppListAppServiceAreas extends $dara.Model {
  serviceArea?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceArea: 'ServiceArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceArea: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceArea)) {
      $dara.Model.validateArray(this.serviceArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppListApp extends $dara.Model {
  /**
   * @example
   * rgf1****"
   */
  appId?: string;
  /**
   * @example
   * Default AppName
   */
  appName?: string;
  /**
   * @example
   * universal
   */
  appType?: string;
  /**
   * @example
   * paybyduration
   */
  billType?: string;
  /**
   * @example
   * 2020-01-09T02:02:29Z
   */
  createTime?: string;
  serviceAreas?: DescribeAppsResponseBodyAppListAppServiceAreas;
  /**
   * @example
   * 1
   */
  status?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      billType: 'BillType',
      createTime: 'CreateTime',
      serviceAreas: 'ServiceAreas',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      billType: 'string',
      createTime: 'string',
      serviceAreas: DescribeAppsResponseBodyAppListAppServiceAreas,
      status: 'number',
      version: 'string',
    };
  }

  validate() {
    if(this.serviceAreas && typeof (this.serviceAreas as any).validate === 'function') {
      (this.serviceAreas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppList extends $dara.Model {
  app?: DescribeAppsResponseBodyAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': DescribeAppsResponseBodyAppListApp },
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

export class DescribeAppsResponseBody extends $dara.Model {
  appList?: DescribeAppsResponseBodyAppList;
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: DescribeAppsResponseBodyAppList,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
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

