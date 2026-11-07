// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayConfigResponseBodyDataEnableK8sSourceWorkloadFilter extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable tag filtering for Kubernetes service source workloads.
   */
  enable?: boolean;
  /**
   * @remarks
   * The tag filtering method. Valid values: EQUAL (matches the specified tag) and NOT_EQUAL (excludes the specified tag).
   * 
   * @example
   * EQUAL
   */
  filterOpt?: string;
  /**
   * @remarks
   * The tag key used to filter Kubernetes workloads.
   * 
   * @example
   * key
   */
  labelKey?: string;
  /**
   * @remarks
   * The tag value used to filter Kubernetes workloads.
   * 
   * @example
   * value
   */
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
  /**
   * @remarks
   * Specifies whether to enable the configuration for trusted X-Forwarded-For source CIDR blocks.
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of trusted source IP addresses or CIDR blocks.
   * 
   * @example
   * 10.0.0.0/8
   */
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
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 500
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-61f465fa2dd044069e2208c4912*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Not available for use.
   * 
   * @example
   * ""
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Not available for use.
   * 
   * @example
   * ""
   */
  gmtModified?: string;
  /**
   * @remarks
   * Not available for use.
   * 
   * @example
   * 0
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether log delivery is enabled.
   * 
   * @example
   * true
   */
  logOn?: boolean;
  /**
   * @remarks
   * The destination Logstore for log delivery. Valid values:
   * 
   * - mse_gw_access_log: Nginx Ingress compatibility is disabled.
   * 
   * - nginx-ingress: Nginx Ingress compatibility is enabled.
   * 
   * @example
   * mse_gw_access_log
   */
  logStoreName?: string;
  /**
   * @remarks
   * Specifies whether Nginx Ingress compatibility is enabled.
   * 
   * @example
   * false
   */
  nginxCompatible?: boolean;
  /**
   * @remarks
   * The destination Simple Log Service project for log delivery.
   * 
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
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 500
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-61f465fa2dd044069e2208c4912*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the Tracing Analysis information was created.
   * 
   * @example
   * 2024-08-12T09:39:07.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the Tracing Analysis information was modified.
   * 
   * @example
   * 2024-08-12T09:39:07.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the Tracing Analysis information.
   * 
   * @example
   * 255
   */
  id?: number;
  /**
   * @remarks
   * The sampling rate (%).
   * 
   * @example
   * 100
   */
  sample?: number;
  /**
   * @remarks
   * The SkyWalking service ID for self-managed SkyWalking.
   * 
   * @example
   * 333
   */
  serviceId?: number;
  /**
   * @remarks
   * The SkyWalking service port for self-managed SkyWalking.
   * 
   * @example
   * 8888
   */
  servicePort?: string;
  /**
   * @remarks
   * Specifies whether Tracing Analysis is enabled.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  /**
   * @remarks
   * The Tracing Analysis type. Valid values:
   * 
   * - XTRACE: Managed Service for OpenTelemetry with the Zipkin Tracing Analysis protocol.
   * 
   * - SKYWALKING: Self-managed SkyWalking.
   * 
   * - OPENTELEMETRY: Managed Service for OpenTelemetry with the OpenTelemetry Tracing Analysis protocol.
   * 
   * - OTSKYWALKING: Managed Service for OpenTelemetry with the SkyWalking Tracing Analysis protocol.
   * 
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
   * @remarks
   * The custom log format.
   * 
   * @example
   * {"requestMetadata":[],"responseHeaders":[],"requestHeaders":["x-test"],"responseMetadata":[]}
   */
  accessLogHeader?: string;
  /**
   * @remarks
   * The buffer size for a single gateway connection. Configuring this parameter affects throughput and gateway memory usage. Unit: bytes.
   * 
   * @example
   * 32768
   */
  downstreamConnectionBufferLimits?: number;
  /**
   * @remarks
   * The maximum number of concurrent streams on a single connection when the client uses HTTP/2. This parameter takes effect at the request level.
   * 
   * @example
   * 100
   */
  downstreamHttp2MaxConcurrentStream?: number;
  /**
   * @remarks
   * The idle timeout period for connections from the client to the gateway. Unit: seconds. If no request is received within the specified period, the gateway disconnects the connection. Valid values: 0 to 600.
   * 
   * @example
   * 180
   */
  downstreamIdleTime?: number;
  /**
   * @remarks
   * Specifies whether to enable custom authentication configuration push for self-managed authentication services. When enabled, changes to authentication rules do not cause connection interruptions. This feature is applicable to WebSocket and online business scenarios.
   * 
   * @example
   * false
   */
  enableCustomAuthConfigPush?: string;
  /**
   * @remarks
   * Specifies whether to generate a request ID in the request header for request tracking. This parameter takes effect at the request level.
   * 
   * @example
   * true
   */
  enableGenerateRequestId?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Gzip compression for requests and responses. Enabling this feature reduces gateway traffic but increases gateway CPU consumption.
   * 
   * @example
   * false
   */
  enableGzip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Gzip hardware acceleration.
   */
  enableGzipHardwareAccelerate?: boolean;
  /**
   * @remarks
   * Specifies whether to enable hardware acceleration. This configuration fails if the region does not support hardware acceleration at the underlying layer or if hardware acceleration was not specified during purchase.
   * 
   * @example
   * true
   */
  enableHardwareAccelerate?: boolean;
  /**
   * @remarks
   * Specifies whether to use HTTP/2 during negotiation between the server and the client. This parameter takes effect at the request level. Changes take effect after 1 to 2 minutes.
   * 
   * @example
   * false
   */
  enableHttp2?: boolean;
  /**
   * @remarks
   * Specifies whether the HTTP/3 protocol is supported.
   * 
   * @example
   * false
   */
  enableHttp3?: boolean;
  /**
   * @remarks
   * The tag filtering configuration for Kubernetes service source workloads.
   */
  enableK8sSourceWorkloadFilter?: GetGatewayConfigResponseBodyDataEnableK8sSourceWorkloadFilter;
  /**
   * @remarks
   * Specifies whether to enable the PROXY protocol. If the gateway ingress traffic is routed through a Network Load Balancer (NLB) and this feature is disabled, the real IP address of the client cannot be obtained. Enabling this feature does not affect non-PROXY protocol requests.
   * 
   * @example
   * true
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * Specifies whether to merge consecutive slashes in a request URL. For example, if this feature is enabled, the extra slash in `www.a.com//b` is merged, making it equivalent to `www.a.com/b`. This parameter takes effect at the request level.
   * 
   * @example
   * true
   */
  enableSlashMerge?: boolean;
  /**
   * @remarks
   * Specifies whether WAF is enabled.
   * 
   * @example
   * true
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * The configuration for trusted X-Forwarded-For source CIDR blocks.
   */
  enableXffTrustedCidrs?: GetGatewayConfigResponseBodyDataEnableXffTrustedCidrs;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-61f465fa2dd044069e2208c4912*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The initial connection-level window size negotiated between the gateway and the client when HTTP/2 is used. Unit: bytes. This parameter takes effect at the request level.
   * 
   * @example
   * 1048576
   */
  initialConnectionWindowSize?: number;
  /**
   * @remarks
   * The initial stream window size negotiated between the gateway and the client when HTTP/2 is used. Unit: bytes. This parameter takes effect at the request level.
   * 
   * @example
   * 65535
   */
  initialStreamWindowSize?: number;
  /**
   * @remarks
   * The keep-alive time in the Keep-Alive response header. Unit: seconds. If this parameter is set to 0, the response header is not returned.
   * 
   * @example
   * 0
   */
  keepaliveHeaderTimeout?: number;
  /**
   * @remarks
   * Indicates whether lightweight metric collection is enabled.
   */
  liteMetrics?: boolean;
  /**
   * @remarks
   * Not available for use.
   * 
   * @example
   * ""
   */
  logFilterConfig?: string;
  /**
   * @remarks
   * The log collection configuration for request and response headers and bodies. The content is a JSON string.
   * 
   * @example
   * {"request":{"headers":{"enabled":true}}}
   */
  logRequestResponseConfig?: string;
  /**
   * @remarks
   * The list of unsupported configurations.
   * 
   * @example
   * "EnableProxyProtocol,EnableCustomAuthConfigPush"
   */
  noSupportedConfigList?: string;
  /**
   * @remarks
   * The action to take when a URI path contains escaped slashes such as %2F, %2f, %5C, or %5c. Default value: KEEP_UNCHANGED. Valid values:
   * 
   * - KEEP_UNCHANGED
   * 
   * - REJECT_REQUEST
   * 
   * - UNESCAPE_AND_REDIRECT
   * 
   * - UNESCAPE_AND_FORWARD
   * 
   * @example
   * KEEP_UNCHANGED
   */
  pathWithEscapedSlashes?: string;
  /**
   * @remarks
   * Specifies whether to preserve the request ID passed by the client.
   */
  preserveExternalRequestID?: boolean;
  /**
   * @remarks
   * Specifies whether to preserve the original case of request and response headers. In HTTP/1.1, headers are case-insensitive. To ensure compatibility with HTTP/2, headers are converted to lowercase by default.
   * 
   * @example
   * true
   */
  preserveHeaderFormat?: boolean;
  /**
   * @remarks
   * The log delivery information.
   */
  slsConfigDetails?: GetGatewayConfigResponseBodyDataSlsConfigDetails;
  /**
   * @remarks
   * Indicates whether the gateway supports Web Application Firewall (WAF).
   * 
   * @example
   * true
   */
  supportWaf?: boolean;
  /**
   * @remarks
   * The default idle timeout period for upstream connections.
   * 
   * @example
   * 30
   */
  upstreamIdleTimeout?: number;
  /**
   * @remarks
   * The keep-alive time maintained for WebSocket connections when connections must be closed during gateway instance upgrades or restarts. Unit: seconds.
   * 
   * @example
   * 30
   */
  websocketTermGracePeriod?: number;
  /**
   * @remarks
   * The number of trusted proxies in front of the gateway. This parameter affects whether the gateway uses request headers such as X-Forwarded-For and X-Request-ID generated by the client. This parameter takes effect at the request level.
   * 
   * @example
   * 0
   */
  xffTrustedNum?: number;
  /**
   * @remarks
   * The Tracing Analysis information.
   */
  xtraceDetails?: GetGatewayConfigResponseBodyDataXtraceDetails;
  /**
   * @remarks
   * The compression algorithm used when compression is enabled. Valid values: brotli and gzip. If this parameter is set and EnableGzip is disabled, EnableGzip is automatically enabled.
   * 
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
      liteMetrics: 'LiteMetrics',
      logFilterConfig: 'LogFilterConfig',
      logRequestResponseConfig: 'LogRequestResponseConfig',
      noSupportedConfigList: 'NoSupportedConfigList',
      pathWithEscapedSlashes: 'PathWithEscapedSlashes',
      preserveExternalRequestID: 'PreserveExternalRequestID',
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
      liteMetrics: 'boolean',
      logFilterConfig: 'string',
      logRequestResponseConfig: 'string',
      noSupportedConfigList: 'string',
      pathWithEscapedSlashes: 'string',
      preserveExternalRequestID: 'boolean',
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
   * @remarks
   * The code used to synchronize with the success field.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data overview.
   */
  data?: GetGatewayConfigResponseBodyData;
  /**
   * @remarks
   * This field is not used. Ignore this field.
   * 
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @remarks
   * This field is not used. Ignore this field.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
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
   * The response message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6092602-C357-4750-89D9-E572FBEA****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
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

