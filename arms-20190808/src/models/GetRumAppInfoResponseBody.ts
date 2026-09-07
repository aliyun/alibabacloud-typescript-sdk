// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataBonreeSDKConfigModuleConfigDefaultConfigValue } from "./DataBonreeSdkconfigModuleConfigDefaultConfigValue";
import { DataBonreeSDKConfigModuleConfigVersionConfigsValue } from "./DataBonreeSdkconfigModuleConfigVersionConfigsValue";


export class GetRumAppInfoResponseBodyDataBonreeSDKConfigModuleConfig extends $dara.Model {
  /**
   * @remarks
   * The default configuration of the application.
   */
  defaultConfig?: { [key: string]: DataBonreeSDKConfigModuleConfigDefaultConfigValue };
  /**
   * @remarks
   * The master switch.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The application version configurations.
   */
  versionConfigs?: { [key: string]: DataBonreeSDKConfigModuleConfigVersionConfigsValue };
  static names(): { [key: string]: string } {
    return {
      defaultConfig: 'defaultConfig',
      enable: 'enable',
      versionConfigs: 'versionConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultConfig: { 'type': 'map', 'keyType': 'string', 'valueType': DataBonreeSDKConfigModuleConfigDefaultConfigValue },
      enable: 'boolean',
      versionConfigs: { 'type': 'map', 'keyType': 'string', 'valueType': DataBonreeSDKConfigModuleConfigVersionConfigsValue },
    };
  }

  validate() {
    if(this.defaultConfig) {
      $dara.Model.validateMap(this.defaultConfig);
    }
    if(this.versionConfigs) {
      $dara.Model.validateMap(this.versionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumAppInfoResponseBodyDataBonreeSDKConfigSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The sampling rate, in parts per thousand. The value must be greater than 0 and less than or equal to 1,000.
   * 
   * @example
   * 500
   */
  samplingRate?: number;
  /**
   * @remarks
   * The sampling type. Only random session sampling is supported. You must set this parameter to `1`.
   * 
   * @example
   * 1
   */
  samplingType?: number;
  static names(): { [key: string]: string } {
    return {
      samplingRate: 'samplingRate',
      samplingType: 'samplingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      samplingRate: 'number',
      samplingType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumAppInfoResponseBodyDataBonreeSDKConfig extends $dara.Model {
  /**
   * @remarks
   * The feature switches for modules.
   */
  moduleConfig?: GetRumAppInfoResponseBodyDataBonreeSDKConfigModuleConfig;
  /**
   * @remarks
   * The sampling configuration.
   */
  samplingConfig?: GetRumAppInfoResponseBodyDataBonreeSDKConfigSamplingConfig;
  static names(): { [key: string]: string } {
    return {
      moduleConfig: 'moduleConfig',
      samplingConfig: 'samplingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleConfig: GetRumAppInfoResponseBodyDataBonreeSDKConfigModuleConfig,
      samplingConfig: GetRumAppInfoResponseBodyDataBonreeSDKConfigSamplingConfig,
    };
  }

  validate() {
    if(this.moduleConfig && typeof (this.moduleConfig as any).validate === 'function') {
      (this.moduleConfig as any).validate();
    }
    if(this.samplingConfig && typeof (this.samplingConfig as any).validate === 'function') {
      (this.samplingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumAppInfoResponseBodyDataServiceDomainConfigs extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 测试
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
   * The list of trace pass-through protocols. This parameter is required when trace tracking is enabled.
   */
  propagatorTypes?: string[];
  /**
   * @remarks
   * The trace sampling rate. Valid values: (0, 100].
   * 
   * @example
   * 100
   */
  samplingRate?: number;
  /**
   * @remarks
   * Indicates whether to enable trace tracking. You must activate Application Real-Time Monitoring Service (ARMS) OpenTelemetry Edition to use this feature. Valid values:
   * 
   * - `true`: enables trace tracking. If you set this parameter to true, a related header is inserted into the request for this domain name.
   * 
   * - `false`: does not enable trace tracking.
   * 
   * @example
   * true
   */
  tracing?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      propagatorTypes: 'PropagatorTypes',
      samplingRate: 'SamplingRate',
      tracing: 'Tracing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      propagatorTypes: { 'type': 'array', 'itemType': 'string' },
      samplingRate: 'number',
      tracing: 'boolean',
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

export class GetRumAppInfoResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Label
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * Value
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

export class GetRumAppInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. The legacy application configuration in the JSON format.
   * 
   * @example
   * {"apiRequestOfH5":300,"apiRequestOfOriginal":500,"coldStart":5000,"hotStart":3000,"staticResourceLoad":300,"stutter":1000,"viewLoadOfH5":1000,"viewLoadOfOriginal":2000}
   */
  appConfig?: string;
  /**
   * @remarks
   * The application group.
   * 
   * @example
   * default
   */
  appGroup?: string;
  /**
   * @remarks
   * The application type. Valid values: `web`, `miniapp`, `ios`, and `android`. `web` indicates Web and H5 applications, `miniapp` indicates mini programs.
   * 
   * @example
   * web
   */
  appType?: string;
  /**
   * @remarks
   * The region where the back-end application is deployed. This parameter is used for end-to-end tracing.
   * 
   * @example
   * cn-hangzhou
   */
  backendServiceTraceRegion?: string;
  /**
   * @remarks
   * The data collection configurations for mobile applications.
   */
  bonreeSDKConfig?: GetRumAppInfoResponseBodyDataBonreeSDKConfig;
  /**
   * @remarks
   * The SDK domain name.
   * 
   * @example
   * b59xxxxxxxx-sdk.rum.aliyuncs.com/v2/browser-sdk.js
   */
  cdnDomain?: string;
  /**
   * @remarks
   * The creation time of the application. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1683353594000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * 门户首页。
   */
  description?: string;
  /**
   * @remarks
   * The endpoint for reporting application data.
   * 
   * @example
   * xxxxxxxx-default-cn.rum.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * Indicates whether the application is bookmarked. Valid values: `true` and `false`.
   * 
   * @example
   * true
   */
  isSubscription?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * tomcat-demo-test
   */
  name?: string;
  /**
   * @remarks
   * The alias of the application.
   * 
   * @example
   * nickname
   */
  nickName?: string;
  /**
   * @remarks
   * The application package name.
   * 
   * @example
   * com.alibaba.rum
   */
  packageName?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * avccccefy0@24cccccbf384dc6
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
   * The resource group ID.
   * 
   * @example
   * rg-aek2vezare****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of service domain name configurations. This parameter is supported only for mobile applications.
   */
  serviceDomainConfigs?: GetRumAppInfoResponseBodyDataServiceDomainConfigs[];
  /**
   * @remarks
   * The name of the Log Service Logstore that is used to store application data.
   * 
   * @example
   * logstore-rum
   */
  slsLogstore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used to store application data.
   * 
   * @example
   * proj-xtrace-xxxxxxxxxxxxxxxxxxxxxxx-cn-hangzhou
   */
  slsProject?: string;
  /**
   * @remarks
   * The application status. Valid values: `created`, `running`, and `stopped`. `stopped` indicates that data reporting is stopped.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetRumAppInfoResponseBodyDataTags[];
  /**
   * @remarks
   * The application type. This parameter is a constant of `RUM`.
   * 
   * @example
   * RUM
   */
  type?: string;
  webSDKConfigJson?: string;
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      appGroup: 'AppGroup',
      appType: 'AppType',
      backendServiceTraceRegion: 'BackendServiceTraceRegion',
      bonreeSDKConfig: 'BonreeSDKConfig',
      cdnDomain: 'CdnDomain',
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
      webSDKConfigJson: 'WebSDKConfigJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: 'string',
      appGroup: 'string',
      appType: 'string',
      backendServiceTraceRegion: 'string',
      bonreeSDKConfig: GetRumAppInfoResponseBodyDataBonreeSDKConfig,
      cdnDomain: 'string',
      createTime: 'string',
      description: 'string',
      endpoint: 'string',
      isSubscription: 'string',
      name: 'string',
      nickName: 'string',
      packageName: 'string',
      pid: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceDomainConfigs: { 'type': 'array', 'itemType': GetRumAppInfoResponseBodyDataServiceDomainConfigs },
      slsLogstore: 'string',
      slsProject: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetRumAppInfoResponseBodyDataTags },
      type: 'string',
      webSDKConfigJson: 'string',
    };
  }

  validate() {
    if(this.bonreeSDKConfig && typeof (this.bonreeSDKConfig as any).validate === 'function') {
      (this.bonreeSDKConfig as any).validate();
    }
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

export class GetRumAppInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. A `200` status code indicates a successful request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the application.
   */
  data?: GetRumAppInfoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error message returned for a failed request.
   * 
   * @example
   * 内部错误，请联系管理员。
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
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
      code: 'number',
      data: GetRumAppInfoResponseBodyData,
      httpStatusCode: 'string',
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

