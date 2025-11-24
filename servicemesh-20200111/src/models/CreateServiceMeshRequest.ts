// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceMeshRequestTag extends $dara.Model {
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * prod
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

export class CreateServiceMeshRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable access log collection. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  accessLogEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable access log collection. Valid values:
   * 
   * *   "": disables access log collection.
   * *   `/dev/stdout`: enables access log collection. Access logs are written to /dev/stdout.
   * 
   * @example
   * /dev/stdout
   */
  accessLogFile?: string;
  /**
   * @remarks
   * Custom fields of access logs. To set this parameter, you must enable access log collection. Otherwise, you cannot set this parameter. The value must be a JSON string. The following key values must be contained: authority_for, bytes_received, bytes_sent, downstream_local_address, downstream_remote_address, duration, istio_policy_status, method, path, protocol, requested_server_name, response_code, response_flags, route_name, start_time, trace_id, upstream_cluster, upstream_host, upstream_local_address, upstream_service_time, upstream_transport_failure_reason, user_agent, and x_forwarded_for.
   * 
   * @example
   * {"authority_for":"%REQ(:AUTHORITY)%","bytes_received":"%BYTES_RECEIVED%","bytes_sent":"%BYTES_SENT%","downstream_local_address":"%DOWNSTREAM_LOCAL_ADDRESS%","downstream_remote_address":"%DOWNSTREAM_REMOTE_ADDRESS%","duration":"%DURATION%","istio_policy_status":"%DYNAMIC_METADATA(istio.mixer:status)%","method":"%REQ(:METHOD)%","path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","protocol":"%PROTOCOL%","request_id":"%REQ(X-REQUEST-ID)%","requested_server_name":"%REQUESTED_SERVER_NAME%","response_code":"%RESPONSE_CODE%","response_flags":"%RESPONSE_FLAGS%","route_name":"%ROUTE_NAME%","start_time":"%START_TIME%","trace_id":"%REQ(X-B3-TRACEID)%","upstream_cluster":"%UPSTREAM_CLUSTER%","upstream_host":"%UPSTREAM_HOST%","upstream_local_address":"%UPSTREAM_LOCAL_ADDRESS%","upstream_service_time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream_transport_failure_reason":"%UPSTREAM_TRANSPORT_FAILURE_REASON%","user_agent":"%REQ(USER-AGENT)%","x_forwarded_for":"%REQ(X-FORWARDED-FOR)%"}
   */
  accessLogFormat?: string;
  /**
   * @remarks
   * The SLS project from which access logs are collected.
   * 
   * @example
   * mesh-log-cf245a429b6ff4b6e97f20797758*****
   */
  accessLogProject?: string;
  /**
   * @remarks
   * Specifies whether to enable gRPC Access Log Service (ALS) of Envoy. gRPC is short for Google Remote Procedure Call. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  accessLogServiceEnabled?: boolean;
  /**
   * @remarks
   * The endpoint of Envoy\\"s gRPC ALS.
   * 
   * @example
   * 0.0.0.0
   */
  accessLogServiceHost?: string;
  /**
   * @remarks
   * The port of Envoy\\"s gRPC ALS.
   * 
   * @example
   * 9999
   */
  accessLogServicePort?: number;
  /**
   * @remarks
   * The type of the Classic Load Balancer (CLB) instance that is bound to the API server. Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`, `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.
   * 
   * @example
   * slb.s1.small
   */
  apiServerLoadBalancerSpec?: string;
  /**
   * @remarks
   * Specifies whether to expose the API server to the Internet. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * > If you set this parameter to `false`, the API server cannot be accessed over the Internet.
   * 
   * @example
   * false
   */
  apiServerPublicEip?: boolean;
  /**
   * @remarks
   * The name of the Log Service project that is used for mesh audit.
   * 
   * Default value: mesh-log-{ASM instance ID}.
   * 
   * @example
   * mesh-log-xxxx
   */
  auditProject?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the CLB instance if the CLB instance uses the subscription billing method. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period of the subscription CLB instance. This parameter is valid only if `ChargeType` is set to `PrePay`. If the original subscription period of the CLB instance is less than one year, the value of this parameter indicates the number of months for auto-renewal. If the original subscription period of the CLB instance is more than one year, the value of this parameter indicates the number of years for auto-renewal.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to allow the Kubernetes API of clusters on the data plane to access Istio resources. The version of the ASM instance must be V1.9.7.93 or later. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  CRAggregationEnabled?: boolean;
  /**
   * @remarks
   * The certificate chain from the CA certificate to the root certificate. At least two certificates are included in the chain.
   * 
   * @example
   * Base64 encoded PEM certificate chain.
   */
  certChain?: string;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   `PayOnDemand`: pay-as-you-go
   * *   `PrePay`: subscription
   * 
   * @example
   * PrePay
   */
  chargeType?: string;
  /**
   * @remarks
   * ASM cluster domain.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * The edition of the ASM instance. Valid values:
   * 
   * - `standard`: Standard Edition
   * 
   * - `enterprise`: Enterprise Edition
   * 
   * - `ultimate`: Ultimate Edition
   * 
   * @example
   * standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * Specifies whether to enable the external service registry. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  configSourceEnabled?: boolean;
  /**
   * @remarks
   * The instance ID of the Nacos registry.
   * 
   * @example
   * mse-cn-tl326******
   */
  configSourceNacosID?: string;
  /**
   * @remarks
   * Specifies whether to enable the collection of control plane logs. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  controlPlaneLogEnabled?: boolean;
  /**
   * @remarks
   * The name of the Log Service project that is used to collect the logs of the control plane.
   * 
   * @example
   * mesh-log-cf245a429b6ff4b6e97f20797758*****
   */
  controlPlaneLogProject?: string;
  /**
   * @remarks
   * Specifies whether to use a custom Prometheus instance. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  customizedPrometheus?: boolean;
  /**
   * @remarks
   * Specifies whether to use a self-managed Zipkin system to collect tracing data. Valid values:
   * 
   * *   `true`: uses a self-managed Zipkin system to collect tracing data.
   * *   `false`: uses Alibaba Cloud Tracing Analysis to collect tracing data.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  customizedZipkin?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the DNS proxy feature. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  DNSProxyingEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Dubbo Filter. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  dubboFilterEnabled?: boolean;
  /**
   * @remarks
   * The edition of the ASM instance.
   * 
   * @example
   * Pro
   */
  edition?: string;
  /**
   * @remarks
   * Specifies whether to enable the ACMG mode for the ASM instance.
   * 
   * @example
   * false
   */
  enableACMG?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Ambient Mesh mode for the ASM instance.
   * 
   * @example
   * false
   */
  enableAmbient?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the mesh audit feature. To enable this feature, make sure that you have activated [Log Service](https://sls.console.aliyun.com/). Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enableAudit?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the rollback feature for Istio resources. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enableCRHistory?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Secret Discovery Service (SDS). Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enableSDSServer?: boolean;
  /**
   * @remarks
   * The IP ranges in CIDR form to be excluded from redirection to the sidecar proxy in the ASM instance.
   * 
   * @example
   * 100.100.10*.***
   */
  excludeIPRanges?: string;
  /**
   * @remarks
   * The inbound ports to be excluded from redirection to the sidecar proxy in the ASM instance. Separate multiple port numbers with commas (,).
   * 
   * @example
   * 80,81
   */
  excludeInboundPorts?: string;
  /**
   * @remarks
   * The outbound ports to be excluded from redirection to the sidecar proxy in the ASM instance. Separate multiple port numbers with commas (,).
   * 
   * @example
   * 80,81
   */
  excludeOutboundPorts?: string;
  /**
   * @remarks
   * The existing CA certificate, which is encoded in Base64. This parameter is used in scenarios where you migrate open source Istio to ASM. It specifies the content of the ca-cert.pem file in the istio-ca-secret secret. The secret is in the istio-system namespace of the Kubernetes cluster where the open source Istio is installed.
   * 
   * @example
   * CA cert content, base64 encoded format.
   */
  existingCaCert?: string;
  /**
   * @remarks
   * The existing CA key, which is encoded in Base64. This parameter is used in scenarios where you migrate open source Istio to ASM. It specifies the content of the ca-key.pem file in the istio-ca-secret secret. The secret is in the istio-system namespace of the Kubernetes cluster where the open source Istio is installed.
   * 
   * @example
   * CA key content, base64 encoded format.
   */
  existingCaKey?: string;
  /**
   * @remarks
   * The type of the existing CA certificate. Valid values:
   * 
   * *   1: Self-signed certificate generated by istiod. The certificate corresponds to the secret named istio-ca-secret in the istio-system namespace. If you use this type of certificate, you must set the `ExistingCaCert` and `ExistingCaKey` parameters.
   * *   2: Administrator-specified certificate. For more information, see [plugin ca cert](https://istio.io/latest/docs/tasks/security/cert-management/plugin-ca-cert/). In most cases, the certificate corresponds to the secret named cacerts in the istio-system namespace. If you use this type of certificate, you must set the `ExisingRootCaCert` and `ExisingRootCaKey` parameters.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  existingCaType?: string;
  /**
   * @remarks
   * The existing root certificate, which is encoded in Base64.
   * 
   * @example
   * Existing CA cert content, base64 encoded format.
   */
  existingRootCaCert?: string;
  /**
   * @remarks
   * The private key that corresponds to the root certificate, which is encoded in Base64.
   * 
   * @example
   * Existing CA key content, base64 encoded format.
   * 
   * @deprecated
   */
  existingRootCaKey?: string;
  /**
   * @remarks
   * Specifies whether to enable gateway configuration filtering. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  filterGatewayClusterConfig?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Gateway API. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  gatewayAPIEnabled?: boolean;
  /**
   * @remarks
   * When you create an ASM instance, you can add a cluster to the ASM instance. If you do not specify this parameter, no cluster is added to the ASM instance. The cluster and the ASM instance must be in the same vSwitch of the same VPC and have the same domain name.
   * 
   * @example
   * ACK cluster id
   */
  guestCluster?: string;
  /**
   * @remarks
   * The IP ranges in CIDR form for which traffic is to be redirected to the sidecar proxy in the ASM instance.
   * 
   * @example
   * *
   */
  includeIPRanges?: string;
  /**
   * @remarks
   * The Istio version of the ASM instance.
   * 
   * @example
   * v1.5.4.1-g5960ec40-aliyun
   */
  istioVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable the mesh topology feature. To enable this feature, make sure that you have enabled Prometheus monitoring. If Prometheus monitoring is disabled, you must set this parameter to `false`.`` Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  kialiEnabled?: boolean;
  /**
   * @remarks
   * The configurations for the access to the nearest instance.
   * 
   * @example
   * {"failover":[{"from":"cn-hangzhou","to":"cn-shanghai"}]}
   */
  localityLBConf?: string;
  /**
   * @remarks
   * Specifies whether to route traffic to the nearest instance. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  localityLoadBalancing?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Microservices Engine (MSE). Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  MSEEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable MultiBuffer-based Transport Layer Security (TLS) acceleration. Valid values:
   * 
   * - `true`
   * 
   * - `false`
   * 
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  multiBufferEnabled?: boolean;
  /**
   * @remarks
   * The pull-request latency. Default value: 30. Unit: seconds.
   * 
   * @example
   * 30s
   */
  multiBufferPollDelay?: string;
  /**
   * @remarks
   * Specifies whether to enable MySQL Filter. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  mysqlFilterEnabled?: boolean;
  /**
   * @remarks
   * The name of the ASM instance.
   * 
   * @example
   * mesh1
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the OPA container.
   * 
   * @example
   * 2
   */
  OPALimitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the OPA container. You can specify the parameter value in the standard quantity representation form used by Kubernetes. 1 Mi equals 1,024 KB.
   * 
   * @example
   * 1024Mi
   */
  OPALimitMemory?: string;
  /**
   * @remarks
   * The log level of the OPA container.
   * 
   * @example
   * info
   */
  OPALogLevel?: string;
  /**
   * @remarks
   * The minimum number of CPU cores that are required by the OPA container. You can specify the parameter value in the standard representation form of CPUs in Kubernetes. For example, if you set the value to 1, one CPU core is required.
   * 
   * @example
   * 1
   */
  OPARequestCPU?: string;
  /**
   * @remarks
   * The minimum size of the memory that is required by the OPA container. You can specify the parameter value in the standard quantity representation form used by Kubernetes. 1 Mi equals 1,024 KB.
   * 
   * @example
   * 512Mi
   */
  OPARequestMemory?: string;
  /**
   * @remarks
   * Specifies whether to enable the OPA plug-in. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  opaEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to install the Open Policy Agent (OPA) plug-in. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  openAgentPolicy?: boolean;
  /**
   * @remarks
   * The subscription period of the CLB instance. This parameter is valid only if `ChargeType` is set to `PrePay`. The value of this parameter indicates the subscription period of the CLB instance. Unit: month. For example, if the subscription period is one year, set this parameter to 12.
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The type of the CLB instance that is bound to Istio Pilot. Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`, `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.
   * 
   * @example
   * slb.s1.small
   */
  pilotLoadBalancerSpec?: string;
  /**
   * @remarks
   * The playground scenario. If you specify this parameter, an ASM playground instance is created. Valid values:
   * 
   * *   ewmaLb: the exponentially weighted moving average (EWMA) load balancing algorithm.
   * 
   * @example
   * ewmaLb
   */
  playgroundScene?: string;
  /**
   * @remarks
   * The endpoint of the custom Prometheus instance.
   * 
   * @example
   * http://prometheus:9090
   */
  prometheusUrl?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the proxy container.
   * 
   * @example
   * 2000m
   */
  proxyLimitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the proxy container.
   * 
   * @example
   * 1024Mi
   */
  proxyLimitMemory?: string;
  /**
   * @remarks
   * The minimum number of CPU cores that are required by the proxy container.
   * 
   * @example
   * 100m
   */
  proxyRequestCPU?: string;
  /**
   * @remarks
   * The minimum size of the memory that is required by the proxy container.
   * 
   * @example
   * 128Mi
   */
  proxyRequestMemory?: string;
  /**
   * @remarks
   * Specifies whether to enable Redis Filter. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  redisFilterEnabled?: boolean;
  /**
   * @remarks
   * The ID of the region in which the ASM instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Tag of the ASM instance. A tag contains the following information:
   * 
   * *   key: the name of the tag
   * *   value: the value of the tag
   */
  tag?: CreateServiceMeshRequestTag[];
  /**
   * @remarks
   * Specifies whether to enable Prometheus monitoring. We recommend that you use Prometheus Service of [Application Real-Time Monitoring Service (ARMS)](https://arms.console.aliyun.com/). Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  telemetry?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Thrift Filter. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  thriftFilterEnabled?: boolean;
  /**
   * @remarks
   * The sampling percentage of Tracing Analysis.
   * 
   * @example
   * 100
   */
  traceSampling?: number;
  /**
   * @remarks
   * Specifies whether to enable the Tracing Analysis feature. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  tracing?: boolean;
  /**
   * @remarks
   * Specifies whether to use an existing CA certificate and private key.
   * 
   * @example
   * false
   */
  useExistingCA?: boolean;
  /**
   * @remarks
   * The ID of the vSwitch to which the ASM instance is connected.
   * 
   * This parameter is required.
   * 
   * @example
   * ["vsw-xzegf5dndkbf4m6eg****"]
   */
  vSwitches?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the ASM instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xzelac2tw4ic7wz31****
   */
  vpcId?: string;
  /**
   * @remarks
   * Specifies whether to enable WebAssembly Filter. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  webAssemblyFilterEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessLogEnabled: 'AccessLogEnabled',
      accessLogFile: 'AccessLogFile',
      accessLogFormat: 'AccessLogFormat',
      accessLogProject: 'AccessLogProject',
      accessLogServiceEnabled: 'AccessLogServiceEnabled',
      accessLogServiceHost: 'AccessLogServiceHost',
      accessLogServicePort: 'AccessLogServicePort',
      apiServerLoadBalancerSpec: 'ApiServerLoadBalancerSpec',
      apiServerPublicEip: 'ApiServerPublicEip',
      auditProject: 'AuditProject',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      CRAggregationEnabled: 'CRAggregationEnabled',
      certChain: 'CertChain',
      chargeType: 'ChargeType',
      clusterDomain: 'ClusterDomain',
      clusterSpec: 'ClusterSpec',
      configSourceEnabled: 'ConfigSourceEnabled',
      configSourceNacosID: 'ConfigSourceNacosID',
      controlPlaneLogEnabled: 'ControlPlaneLogEnabled',
      controlPlaneLogProject: 'ControlPlaneLogProject',
      customizedPrometheus: 'CustomizedPrometheus',
      customizedZipkin: 'CustomizedZipkin',
      DNSProxyingEnabled: 'DNSProxyingEnabled',
      dubboFilterEnabled: 'DubboFilterEnabled',
      edition: 'Edition',
      enableACMG: 'EnableACMG',
      enableAmbient: 'EnableAmbient',
      enableAudit: 'EnableAudit',
      enableCRHistory: 'EnableCRHistory',
      enableSDSServer: 'EnableSDSServer',
      excludeIPRanges: 'ExcludeIPRanges',
      excludeInboundPorts: 'ExcludeInboundPorts',
      excludeOutboundPorts: 'ExcludeOutboundPorts',
      existingCaCert: 'ExistingCaCert',
      existingCaKey: 'ExistingCaKey',
      existingCaType: 'ExistingCaType',
      existingRootCaCert: 'ExistingRootCaCert',
      existingRootCaKey: 'ExistingRootCaKey',
      filterGatewayClusterConfig: 'FilterGatewayClusterConfig',
      gatewayAPIEnabled: 'GatewayAPIEnabled',
      guestCluster: 'GuestCluster',
      includeIPRanges: 'IncludeIPRanges',
      istioVersion: 'IstioVersion',
      kialiEnabled: 'KialiEnabled',
      localityLBConf: 'LocalityLBConf',
      localityLoadBalancing: 'LocalityLoadBalancing',
      MSEEnabled: 'MSEEnabled',
      multiBufferEnabled: 'MultiBufferEnabled',
      multiBufferPollDelay: 'MultiBufferPollDelay',
      mysqlFilterEnabled: 'MysqlFilterEnabled',
      name: 'Name',
      OPALimitCPU: 'OPALimitCPU',
      OPALimitMemory: 'OPALimitMemory',
      OPALogLevel: 'OPALogLevel',
      OPARequestCPU: 'OPARequestCPU',
      OPARequestMemory: 'OPARequestMemory',
      opaEnabled: 'OpaEnabled',
      openAgentPolicy: 'OpenAgentPolicy',
      period: 'Period',
      pilotLoadBalancerSpec: 'PilotLoadBalancerSpec',
      playgroundScene: 'PlaygroundScene',
      prometheusUrl: 'PrometheusUrl',
      proxyLimitCPU: 'ProxyLimitCPU',
      proxyLimitMemory: 'ProxyLimitMemory',
      proxyRequestCPU: 'ProxyRequestCPU',
      proxyRequestMemory: 'ProxyRequestMemory',
      redisFilterEnabled: 'RedisFilterEnabled',
      regionId: 'RegionId',
      tag: 'Tag',
      telemetry: 'Telemetry',
      thriftFilterEnabled: 'ThriftFilterEnabled',
      traceSampling: 'TraceSampling',
      tracing: 'Tracing',
      useExistingCA: 'UseExistingCA',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
      webAssemblyFilterEnabled: 'WebAssemblyFilterEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogEnabled: 'boolean',
      accessLogFile: 'string',
      accessLogFormat: 'string',
      accessLogProject: 'string',
      accessLogServiceEnabled: 'boolean',
      accessLogServiceHost: 'string',
      accessLogServicePort: 'number',
      apiServerLoadBalancerSpec: 'string',
      apiServerPublicEip: 'boolean',
      auditProject: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      CRAggregationEnabled: 'boolean',
      certChain: 'string',
      chargeType: 'string',
      clusterDomain: 'string',
      clusterSpec: 'string',
      configSourceEnabled: 'boolean',
      configSourceNacosID: 'string',
      controlPlaneLogEnabled: 'boolean',
      controlPlaneLogProject: 'string',
      customizedPrometheus: 'boolean',
      customizedZipkin: 'boolean',
      DNSProxyingEnabled: 'boolean',
      dubboFilterEnabled: 'boolean',
      edition: 'string',
      enableACMG: 'boolean',
      enableAmbient: 'boolean',
      enableAudit: 'boolean',
      enableCRHistory: 'boolean',
      enableSDSServer: 'boolean',
      excludeIPRanges: 'string',
      excludeInboundPorts: 'string',
      excludeOutboundPorts: 'string',
      existingCaCert: 'string',
      existingCaKey: 'string',
      existingCaType: 'string',
      existingRootCaCert: 'string',
      existingRootCaKey: 'string',
      filterGatewayClusterConfig: 'boolean',
      gatewayAPIEnabled: 'boolean',
      guestCluster: 'string',
      includeIPRanges: 'string',
      istioVersion: 'string',
      kialiEnabled: 'boolean',
      localityLBConf: 'string',
      localityLoadBalancing: 'boolean',
      MSEEnabled: 'boolean',
      multiBufferEnabled: 'boolean',
      multiBufferPollDelay: 'string',
      mysqlFilterEnabled: 'boolean',
      name: 'string',
      OPALimitCPU: 'string',
      OPALimitMemory: 'string',
      OPALogLevel: 'string',
      OPARequestCPU: 'string',
      OPARequestMemory: 'string',
      opaEnabled: 'boolean',
      openAgentPolicy: 'boolean',
      period: 'number',
      pilotLoadBalancerSpec: 'string',
      playgroundScene: 'string',
      prometheusUrl: 'string',
      proxyLimitCPU: 'string',
      proxyLimitMemory: 'string',
      proxyRequestCPU: 'string',
      proxyRequestMemory: 'string',
      redisFilterEnabled: 'boolean',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceMeshRequestTag },
      telemetry: 'boolean',
      thriftFilterEnabled: 'boolean',
      traceSampling: 'number',
      tracing: 'boolean',
      useExistingCA: 'boolean',
      vSwitches: 'string',
      vpcId: 'string',
      webAssemblyFilterEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

