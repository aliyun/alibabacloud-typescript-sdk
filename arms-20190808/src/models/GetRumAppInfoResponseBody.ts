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
   * Indicates whether the configuration is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The version configurations of the application.
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
   * Sampling rate: between (0, 1000], a thousandth.
   * 
   * @example
   * 500
   */
  samplingRate?: number;
  /**
   * @remarks
   * Sampling type, currently only session random sampling is supported, that is, fixed transmission: 1.
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
   * The module configuration.
   */
  moduleConfig?: GetRumAppInfoResponseBodyDataBonreeSDKConfigModuleConfig;
  /**
   * @remarks
   * Sampling configuration.
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
   * The sampling rate of a trace. Valid values: (0, 100].
   * 
   * @example
   * 100
   */
  samplingRate?: number;
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
   * The tag key.
   * 
   * @example
   * Label
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The application configurations in the JSON format. This parameter is deprecated.
   * 
   * @example
   * {"apiRequestOfH5":300,"apiRequestOfOriginal":500,"coldStart":5000,"hotStart":3000,"staticResourceLoad":300,"stutter":1000,"viewLoadOfH5":1000,"viewLoadOfOriginal":2000}
   */
  appConfig?: string;
  /**
   * @remarks
   * The group to which the application belongs.
   * 
   * @example
   * default
   */
  appGroup?: string;
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
   * The region where the backend is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  backendServiceTraceRegion?: string;
  /**
   * @remarks
   * The collection configurations.
   */
  bonreeSDKConfig?: GetRumAppInfoResponseBodyDataBonreeSDKConfig;
  /**
   * @remarks
   * The domain name of the SDK.
   * 
   * @example
   * b59xxxxxxxx-sdk.rum.aliyuncs.com/v2/browser-sdk.js
   */
  cdnDomain?: string;
  /**
   * @remarks
   * The time when the application was created. The value is a timestamp. Unit: milliseconds.
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
   * Portal home page.
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
   * The name of the application package.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2vezare****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of service domain configurations. Only mobile applications are supported.
   */
  serviceDomainConfigs?: GetRumAppInfoResponseBodyDataServiceDomainConfigs[];
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
   * proj-xtrace-xxxxxxxxxxxxxxxxxxxxxxx-cn-hangzhou
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
  tags?: GetRumAppInfoResponseBodyDataTags[];
  /**
   * @remarks
   * The type of the application. Valid value: RUM.
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
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The application details.
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
   * The error message.
   * 
   * @example
   * StartTime is mandatory for this action.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
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

