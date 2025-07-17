// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumAppsResponseBodyAppListServiceDomainConfigs extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The domain name or IP address.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The trace propagation protocols. This parameter is required if the tracing analysis feature is enabled.
   */
  propagatorTypes?: string[];
  /**
   * @remarks
   * Indicates whether the tracing analysis feature is enabled. To enable the tracing analysis feature, you must activate Managed Service for OpenTelemetry. Valid values:
   * 
   * *   `true`: enables the tracing analysis feature. If you enable the tracing analysis feature, related headers are inserted into requests for the domain name.
   * *   `false`: disables the tracing analysis feature.
   * 
   * @example
   * true
   */
  tracing?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      propagatorTypes: 'PropagatorTypes',
      tracing: 'Tracing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      propagatorTypes: { 'type': 'array', 'itemType': 'string' },
      tracing: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propagatorTypes)) {
      $dara.Model.validateArray(this.propagatorTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumAppsResponseBodyAppListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ok
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

export class GetRumAppsResponseBodyAppList extends $dara.Model {
  /**
   * @remarks
   * The application type. Valid values: web, miniapp, ios, and android.
   * 
   * @example
   * web
   */
  appType?: string;
  /**
   * @remarks
   * The time when the application was created. The value is a timestamp.
   * 
   * @example
   * 1685686960872
   */
  createTime?: any;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * TEST
   */
  description?: string;
  /**
   * @remarks
   * The endpoint that is used to report application data.
   * 
   * @example
   * xxxxxxxx-default-cn.rum.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * Indicates whether the application is subscribed. Valid values: true and false.
   * 
   * @example
   * true
   */
  isSubscription?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * home page
   */
  name?: string;
  /**
   * @remarks
   * The alias of the application.
   * 
   * @example
   * Williamtag
   */
  nickName?: string;
  /**
   * @remarks
   * The package name of the Android application.
   * 
   * @example
   * com.zy.yxws
   */
  packageName?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * xxxxx@cc08bdxxxx20b15
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
   * rg-acfmzaq3ypaqkdy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of service domain configurations. Only mobile applications are supported.
   */
  serviceDomainConfigs?: GetRumAppsResponseBodyAppListServiceDomainConfigs[];
  /**
   * @remarks
   * The name of the Simple Log Service Logstore that stores application data.
   * 
   * @example
   * logstore-rum
   */
  slsLogstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project that stores application data.
   * 
   * @example
   * proj-xtrace-xxxxxxxba6ef5466b5debf9e2f951-cn-hangzhou
   */
  slsProject?: string;
  /**
   * @remarks
   * The status of the application. Valid values: created, running, and stopped.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetRumAppsResponseBodyAppListTags[];
  /**
   * @remarks
   * The type of the application. Valid value: RUM.
   * 
   * @example
   * RUM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      createTime: 'CreateTime',
      description: 'Description',
      endpoint: 'Endpoint',
      isSubscription: 'IsSubscription',
      name: 'Name',
      nickName: 'NickName',
      packageName: 'PackageName',
      pid: 'Pid',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceDomainConfigs: 'ServiceDomainConfigs',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      createTime: 'any',
      description: 'string',
      endpoint: 'string',
      isSubscription: 'boolean',
      name: 'string',
      nickName: 'string',
      packageName: 'string',
      pid: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceDomainConfigs: { 'type': 'array', 'itemType': GetRumAppsResponseBodyAppListServiceDomainConfigs },
      slsLogstore: 'string',
      slsProject: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetRumAppsResponseBodyAppListTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceDomainConfigs)) {
      $dara.Model.validateArray(this.serviceDomainConfigs);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried applications.
   */
  appList?: GetRumAppsResponseBodyAppList[];
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal error, please contact customer service.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70675725-8F11-4817-8106-CFE0AD71****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': GetRumAppsResponseBodyAppList },
      code: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

