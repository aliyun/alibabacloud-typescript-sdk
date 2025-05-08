// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayConfigResponseBodyDataEnableK8sSourceWorkloadFilter } from "./GetGatewayConfigResponseBodyDataEnableK8sSourceWorkloadFilter";
import { GetGatewayConfigResponseBodyDataEnableXffTrustedCidrs } from "./GetGatewayConfigResponseBodyDataEnableXffTrustedCidrs";
import { GetGatewayConfigResponseBodyDataSlsConfigDetails } from "./GetGatewayConfigResponseBodyDataSlsConfigDetails";
import { GetGatewayConfigResponseBodyDataXtraceDetails } from "./GetGatewayConfigResponseBodyDataXtraceDetails";


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

