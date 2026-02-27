// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceAppsResponseBodyDataAppListOwnerList extends $dara.Model {
  /**
   * @example
   * 12345
   */
  id?: string;
  /**
   * @example
   * 张三
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAppsResponseBodyDataAppList extends $dara.Model {
  /**
   * @example
   * 默认分组
   */
  appGroup?: string;
  /**
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @example
   * 默认应用
   */
  appName?: string;
  isMember?: boolean;
  ownerList?: ListDataServiceAppsResponseBodyDataAppListOwnerList[];
  static names(): { [key: string]: string } {
    return {
      appGroup: 'AppGroup',
      appId: 'AppId',
      appName: 'AppName',
      isMember: 'IsMember',
      ownerList: 'OwnerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroup: 'string',
      appId: 'number',
      appName: 'string',
      isMember: 'boolean',
      ownerList: { 'type': 'array', 'itemType': ListDataServiceAppsResponseBodyDataAppListOwnerList },
    };
  }

  validate() {
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAppsResponseBodyData extends $dara.Model {
  appList?: ListDataServiceAppsResponseBodyDataAppList[];
  /**
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': ListDataServiceAppsResponseBodyDataAppList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appList)) {
      $dara.Model.validateArray(this.appList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAppsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListDataServiceAppsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDataServiceAppsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

