// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleConfigResponseBodyModuleConfigListItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group to which the server belongs.
   * 
   * @example
   * 5562414
   */
  groupId?: number;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-uf6435dn4t59b9av****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the server.
   * 
   * @example
   * inStanceName****
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 2.2.X.X
   */
  ip?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * a47e3713-ed22-4015-93a3-d88ebe6****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ip: 'Ip',
      region: 'Region',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instanceId: 'string',
      instanceName: 'string',
      ip: 'string',
      region: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleConfigResponseBodyModuleConfigList extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * timescan
   */
  configName?: string;
  /**
   * @remarks
   * An array that consists of the configuration items.
   */
  items?: GetModuleConfigResponseBodyModuleConfigListItems[];
  /**
   * @remarks
   * The name of the module.
   * 
   * @example
   * alihids
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      items: 'Items',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      items: { 'type': 'array', 'itemType': GetModuleConfigResponseBodyModuleConfigListItems },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleConfigResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class GetModuleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * An array that consists of the configurations of the module.
   */
  moduleConfigList?: GetModuleConfigResponseBodyModuleConfigList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: GetModuleConfigResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 291B49F9-1685-4005-9D34-606B6F78****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      moduleConfigList: 'ModuleConfigList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      moduleConfigList: { 'type': 'array', 'itemType': GetModuleConfigResponseBodyModuleConfigList },
      pageInfo: GetModuleConfigResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.moduleConfigList)) {
      $dara.Model.validateArray(this.moduleConfigList);
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

