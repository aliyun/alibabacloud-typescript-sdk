// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRetcodeAppByPageResponseBodyPageBeanRetcodeAppsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
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

export class SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. The parameter is an auto-increment parameter.
   * 
   * @example
   * 16064
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * a3
   */
  appName?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1545363321000
   */
  createTime?: number;
  /**
   * @remarks
   * The alias of the application.
   * 
   * @example
   * c1
   */
  nickName?: string;
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * @example
   * eb4zdose6v@9781be0f44d****
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   `web`: web application
   * *   `weex`: Weex mobile app
   * *   `mini_dd`: DingTalk mini program
   * *   `mini_alipay`: Alipay mini program
   * *   `mini_wx`: WeChat mini program
   * *   `mini_common`: mini program on other platforms
   * 
   * @example
   * web
   */
  retcodeAppType?: string;
  /**
   * @remarks
   * The tag.
   */
  tags?: SearchRetcodeAppByPageResponseBodyPageBeanRetcodeAppsTags[];
  /**
   * @remarks
   * The type of the monitoring task. Valid values:
   * 
   * *   `TRACE`: Application Monitoring
   * *   `RETCODE`: Browser Monitoring
   * 
   * @example
   * RETCODE
   */
  type?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 1545363321000
   */
  updateTime?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12341234
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      nickName: 'NickName',
      pid: 'Pid',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retcodeAppType: 'RetcodeAppType',
      tags: 'Tags',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      nickName: 'string',
      pid: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      retcodeAppType: 'string',
      tags: { 'type': 'array', 'itemType': SearchRetcodeAppByPageResponseBodyPageBeanRetcodeAppsTags },
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponseBodyPageBean extends $dara.Model {
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
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The browser monitoring tasks that are returned.
   */
  retcodeApps?: SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      retcodeApps: 'RetcodeApps',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      retcodeApps: { 'type': 'array', 'itemType': SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.retcodeApps)) {
      $dara.Model.validateArray(this.retcodeApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned page information.
   */
  pageBean?: SearchRetcodeAppByPageResponseBodyPageBean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 626037F5-FDEB-45B0-804C-B3C92797A64E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchRetcodeAppByPageResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

