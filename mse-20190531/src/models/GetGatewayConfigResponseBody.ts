// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayConfigResponseBodyDataEnableK8sSourceWorkloadFilter extends $dara.Model {
  enable?: boolean;
  filterOpt?: string;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      filterOpt: 'FilterOpt',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      filterOpt: 'string',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayConfigResponseBodyDataEnableXffTrustedCidrs extends $dara.Model {
  enable?: boolean;
  ipListContent?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      ipListContent: 'IpListContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      ipListContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayConfigResponseBodyDataSlsConfigDetails extends $dara.Model {
  /**
   * @example
   * 500
   */
  gatewayId?: number;
  /**
   * @example
   * gw-61f465fa2dd044069e2208c4912*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * ""
   */
  gmtCreate?: string;
  /**
   * @example
   * ""
   */
  gmtModified?: string;
  /**
   * @example
   * 0
   */
  id?: number;
  /**
   * @example
   * true
   */
  logOn?: boolean;
  /**
   * @example
   * mse_gw_access_log
   */
  logStoreName?: string;
  /**
   * @example
   * false
   */
  nginxCompatible?: boolean;
  /**
   * @example
   * test
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      logOn: 'LogOn',
      logStoreName: 'LogStoreName',
      nginxCompatible: 'NginxCompatible',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      logOn: 'boolean',
      logStoreName: 'string',
      nginxCompatible: 'boolean',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayConfigResponseBodyDataXtraceDetails extends $dara.Model {
  /**
   * @example
   * 500
   */
  gatewayId?: number;
  /**
   * @example
   * gw-61f465fa2dd044069e2208c4912*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 2024-08-12T09:39:07.000+0000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-08-12T09:39:07.000+0000
   */
  gmtModified?: string;
  /**
   * @example
   * 255
   */
  id?: number;
  /**
   * @example
   * 100
   */
  sample?: number;
  /**
   * @example
   * 333
   */
  serviceId?: number;
  /**
   * @example
   * 8888
   */
  servicePort?: string;
  /**
   * @example
   * true
   */
  traceOn?: boolean;
  /**
   * @example
   * OPENTELEMETRY
   */
  traceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      sample: 'Sample',
      serviceId: 'ServiceId',
      servicePort: 'ServicePort',
      traceOn: 'TraceOn',
      traceType: 'TraceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      sample: 'number',
      serviceId: 'number',
      servicePort: 'string',
      traceOn: 'boolean',
      traceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"requestMetadata":[],"responseHeaders":[],"requestHeaders":["x-test"],"responseMetadata":[]}
   */
  accessLogHeader?: string;
  /**
   * @example
   * 32768
   */
  downstreamConnectionBufferLimits?: number;
  /**
   * @example
   * 100
   */
  downstreamHttp2MaxConcurrentStream?: number;
  /**
   * @example
   * 180
   */
  downstreamIdleTime?: number;
  /**
   * @example
   * false
   */
  enableCustomAuthConfigPush?: string;
  /**
   * @example
   * true
   */
  enableGenerateRequestId?: boolean;
  /**
   * @example
   * false
   */
  enableGzip?: boolean;
  enableGzipHardwareAccelerate?: boolean;
  /**
   * @example
   * true
   */
  enableHardwareAccelerate?: boolean;
  /**
   * @example
   * false
   */
  enableHttp2?: boolean;
  /**
   * @example
   * false
   */
  enableHttp3?: boolean;
  enableK8sSourceWorkloadFilter?: GetGatewayConfigResponseBodyDataEnableK8sSourceWorkloadFilter;
  /**
   * @example
   * true
   */
  enableProxyProtocol?: boolean;
  /**
   * @example
   * true
   */
  enableSlashMerge?: boolean;
  /**
   * @example
   * true
   */
  enableWaf?: boolean;
  enableXffTrustedCidrs?: GetGatewayConfigResponseBodyDataEnableXffTrustedCidrs;
  /**
   * @example
   * gw-61f465fa2dd044069e2208c4912*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 1048576
   */
  initialConnectionWindowSize?: number;
  /**
   * @example
   * 65535
   */
  initialStreamWindowSize?: number;
  /**
   * @example
   * 0
   */
  keepaliveHeaderTimeout?: number;
  /**
   * @example
   * ""
   */
  logFilterConfig?: string;
  /**
   * @example
   * "EnableProxyProtocol,EnableCustomAuthConfigPush"
   */
  noSupportedConfigList?: string;
  /**
   * @example
   * KEEP_UNCHANGED
   */
  pathWithEscapedSlashes?: string;
  /**
   * @example
   * true
   */
  preserveHeaderFormat?: boolean;
  slsConfigDetails?: GetGatewayConfigResponseBodyDataSlsConfigDetails;
  /**
   * @example
   * true
   */
  supportWaf?: boolean;
  /**
   * @example
   * 30
   */
  upstreamIdleTimeout?: number;
  /**
   * @example
   * 30
   */
  websocketTermGracePeriod?: number;
  /**
   * @example
   * 0
   */
  xffTrustedNum?: number;
  xtraceDetails?: GetGatewayConfigResponseBodyDataXtraceDetails;
  /**
   * @example
   * ["gzip"]
   */
  zipAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogHeader: 'AccessLogHeader',
      downstreamConnectionBufferLimits: 'DownstreamConnectionBufferLimits',
      downstreamHttp2MaxConcurrentStream: 'DownstreamHttp2MaxConcurrentStream',
      downstreamIdleTime: 'DownstreamIdleTime',
      enableCustomAuthConfigPush: 'EnableCustomAuthConfigPush',
      enableGenerateRequestId: 'EnableGenerateRequestId',
      enableGzip: 'EnableGzip',
      enableGzipHardwareAccelerate: 'EnableGzipHardwareAccelerate',
      enableHardwareAccelerate: 'EnableHardwareAccelerate',
      enableHttp2: 'EnableHttp2',
      enableHttp3: 'EnableHttp3',
      enableK8sSourceWorkloadFilter: 'EnableK8sSourceWorkloadFilter',
      enableProxyProtocol: 'EnableProxyProtocol',
      enableSlashMerge: 'EnableSlashMerge',
      enableWaf: 'EnableWaf',
      enableXffTrustedCidrs: 'EnableXffTrustedCidrs',
      gatewayUniqueId: 'GatewayUniqueId',
      initialConnectionWindowSize: 'InitialConnectionWindowSize',
      initialStreamWindowSize: 'InitialStreamWindowSize',
      keepaliveHeaderTimeout: 'KeepaliveHeaderTimeout',
      logFilterConfig: 'LogFilterConfig',
      noSupportedConfigList: 'NoSupportedConfigList',
      pathWithEscapedSlashes: 'PathWithEscapedSlashes',
      preserveHeaderFormat: 'PreserveHeaderFormat',
      slsConfigDetails: 'SlsConfigDetails',
      supportWaf: 'SupportWaf',
      upstreamIdleTimeout: 'UpstreamIdleTimeout',
      websocketTermGracePeriod: 'WebsocketTermGracePeriod',
      xffTrustedNum: 'XffTrustedNum',
      xtraceDetails: 'XtraceDetails',
      zipAlgorithm: 'ZipAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogHeader: 'string',
      downstreamConnectionBufferLimits: 'number',
      downstreamHttp2MaxConcurrentStream: 'number',
      downstreamIdleTime: 'number',
      enableCustomAuthConfigPush: 'string',
      enableGenerateRequestId: 'boolean',
      enableGzip: 'boolean',
      enableGzipHardwareAccelerate: 'boolean',
      enableHardwareAccelerate: 'boolean',
      enableHttp2: 'boolean',
      enableHttp3: 'boolean',
      enableK8sSourceWorkloadFilter: GetGatewayConfigResponseBodyDataEnableK8sSourceWorkloadFilter,
      enableProxyProtocol: 'boolean',
      enableSlashMerge: 'boolean',
      enableWaf: 'boolean',
      enableXffTrustedCidrs: GetGatewayConfigResponseBodyDataEnableXffTrustedCidrs,
      gatewayUniqueId: 'string',
      initialConnectionWindowSize: 'number',
      initialStreamWindowSize: 'number',
      keepaliveHeaderTimeout: 'number',
      logFilterConfig: 'string',
      noSupportedConfigList: 'string',
      pathWithEscapedSlashes: 'string',
      preserveHeaderFormat: 'boolean',
      slsConfigDetails: GetGatewayConfigResponseBodyDataSlsConfigDetails,
      supportWaf: 'boolean',
      upstreamIdleTimeout: 'number',
      websocketTermGracePeriod: 'number',
      xffTrustedNum: 'number',
      xtraceDetails: GetGatewayConfigResponseBodyDataXtraceDetails,
      zipAlgorithm: 'string',
    };
  }

  validate() {
    if(this.enableK8sSourceWorkloadFilter && typeof (this.enableK8sSourceWorkloadFilter as any).validate === 'function') {
      (this.enableK8sSourceWorkloadFilter as any).validate();
    }
    if(this.enableXffTrustedCidrs && typeof (this.enableXffTrustedCidrs as any).validate === 'function') {
      (this.enableXffTrustedCidrs as any).validate();
    }
    if(this.slsConfigDetails && typeof (this.slsConfigDetails as any).validate === 'function') {
      (this.slsConfigDetails as any).validate();
    }
    if(this.xtraceDetails && typeof (this.xtraceDetails as any).validate === 'function') {
      (this.xtraceDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetGatewayConfigResponseBodyData;
  /**
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * F6092602-C357-4750-89D9-E572FBEA****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetGatewayConfigResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
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

