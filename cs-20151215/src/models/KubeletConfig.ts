// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class KubeletConfigReservedMemory extends $dara.Model {
  /**
   * @remarks
   * The memory resources limit.
   * 
   * @example
   * {"memory": "1Gi"}
   */
  limits?: { [key: string]: any };
  /**
   * @remarks
   * The NUMA node.
   * 
   * @example
   * 0
   */
  numaNode?: number;
  static names(): { [key: string]: string } {
    return {
      limits: 'limits',
      numaNode: 'numaNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limits: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      numaNode: 'number',
    };
  }

  validate() {
    if(this.limits) {
      $dara.Model.validateMap(this.limits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KubeletConfigTracing extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the collector.
   * 
   * @example
   * localhost:4317
   */
  endpoint?: string;
  /**
   * @remarks
   * The number of samples to collect per million spans.
   * 
   * @example
   * 200000
   */
  samplingRatePerMillion?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      samplingRatePerMillion: 'samplingRatePerMillion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      samplingRatePerMillion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KubeletConfig extends $dara.Model {
  /**
   * @remarks
   * The whitelist of allowed unsafe sysctl patterns.
   */
  allowedUnsafeSysctls?: string[];
  /**
   * @remarks
   * The list of IP addresses for the cluster DNS servers.
   */
  clusterDNS?: string[];
  /**
   * @remarks
   * The maximum number of log files that can exist per container.
   * 
   * @example
   * 5
   */
  containerLogMaxFiles?: number;
  /**
   * @remarks
   * The maximum size a log file can reach before log rotation is performed.
   * 
   * @example
   * 10Mi
   */
  containerLogMaxSize?: string;
  /**
   * @remarks
   * The maximum number of concurrent workers for log rotation operations.
   * 
   * @example
   * 1
   */
  containerLogMaxWorkers?: number;
  /**
   * @remarks
   * The interval for monitoring container logs to perform log rotation.
   * 
   * @example
   * 10s
   */
  containerLogMonitorInterval?: string;
  /**
   * @remarks
   * Specifies whether to enable CPU CFS quota enforcement.
   * 
   * @example
   * true
   */
  cpuCFSQuota?: boolean;
  /**
   * @remarks
   * The CPU CFS quota period value.
   * 
   * @example
   * 100ms
   */
  cpuCFSQuotaPeriod?: string;
  /**
   * @remarks
   * The CPU manager policy.
   * 
   * @example
   * none
   */
  cpuManagerPolicy?: string;
  /**
   * @remarks
   * The maximum burst size for event records.
   * 
   * @example
   * 10
   */
  eventBurst?: number;
  /**
   * @remarks
   * The maximum number of events that can be generated per second.
   * 
   * @example
   * 5
   */
  eventRecordQPS?: number;
  /**
   * @remarks
   * The set of hard eviction thresholds that trigger pod eviction.
   */
  evictionHard?: { [key: string]: any };
  /**
   * @remarks
   * The set of soft eviction thresholds.
   */
  evictionSoft?: { [key: string]: any };
  /**
   * @remarks
   * The set of eviction grace periods.
   */
  evictionSoftGracePeriod?: { [key: string]: any };
  /**
   * @remarks
   * The feature gates configuration used to enable experimental features.
   */
  featureGates?: { [key: string]: any };
  /**
   * @remarks
   * The threshold above which image garbage collection runs continuously.
   * 
   * @example
   * 85
   */
  imageGCHighThresholdPercent?: number;
  /**
   * @remarks
   * The threshold below which image garbage collection is not performed.
   * 
   * @example
   * 80
   */
  imageGCLowThresholdPercent?: number;
  /**
   * @remarks
   * The maximum number of burst requests sent to the API server per second.
   * 
   * @example
   * 10
   */
  kubeAPIBurst?: number;
  /**
   * @remarks
   * The number of queries per second when communicating with the API server.
   * 
   * @example
   * 5
   */
  kubeAPIQPS?: number;
  /**
   * @remarks
   * The resource configuration reserved for Kubernetes system components.
   */
  kubeReserved?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of pods that can run on the node.
   * 
   * @example
   * 110
   */
  maxPods?: number;
  /**
   * @remarks
   * The policy used by the memory management manager.
   * 
   * @example
   * none
   */
  memoryManagerPolicy?: string;
  /**
   * @remarks
   * The maximum number of PIDs that can be used in a pod.
   * 
   * @example
   * -1
   */
  podPidsLimit?: number;
  /**
   * @remarks
   * The read-only port number.
   * 
   * @example
   * 0
   */
  readOnlyPort?: number;
  /**
   * @remarks
   * The maximum number of burst image pulls.
   * 
   * @example
   * 10
   */
  registryBurst?: number;
  /**
   * @remarks
   * The QPS limit for the image registry.
   * 
   * @example
   * 5
   */
  registryPullQPS?: number;
  /**
   * @remarks
   * The memory reserved for NUMA nodes.
   */
  reservedMemory?: KubeletConfigReservedMemory[];
  /**
   * @remarks
   * Specifies whether to pull images one at a time.
   * 
   * @example
   * true
   */
  serializeImagePulls?: boolean;
  /**
   * @remarks
   * Enables automatic issuance and rotation of kubelet server certificates. When enabled, you must also set "RotateKubeletServerCertificate": true in the kubelet featureGates configuration.
   * 
   * > - Available only for clusters running version 1.30 or later.
   * > - For clusters running version 1.30 to v1.33, submit a ticket to apply for this feature.
   * 
   * @example
   * true
   */
  serverTLSBootstrap?: boolean;
  /**
   * @remarks
   * The resource configuration reserved for the system.
   */
  systemReserved?: { [key: string]: any };
  /**
   * @remarks
   * The Policy Name of the topology management manager to use.
   * 
   * @example
   * restricted
   */
  topologyManagerPolicy?: string;
  /**
   * @remarks
   * The versioned configuration for the OpenTelemetry tracing client.
   */
  tracing?: KubeletConfigTracing;
  static names(): { [key: string]: string } {
    return {
      allowedUnsafeSysctls: 'allowedUnsafeSysctls',
      clusterDNS: 'clusterDNS',
      containerLogMaxFiles: 'containerLogMaxFiles',
      containerLogMaxSize: 'containerLogMaxSize',
      containerLogMaxWorkers: 'containerLogMaxWorkers',
      containerLogMonitorInterval: 'containerLogMonitorInterval',
      cpuCFSQuota: 'cpuCFSQuota',
      cpuCFSQuotaPeriod: 'cpuCFSQuotaPeriod',
      cpuManagerPolicy: 'cpuManagerPolicy',
      eventBurst: 'eventBurst',
      eventRecordQPS: 'eventRecordQPS',
      evictionHard: 'evictionHard',
      evictionSoft: 'evictionSoft',
      evictionSoftGracePeriod: 'evictionSoftGracePeriod',
      featureGates: 'featureGates',
      imageGCHighThresholdPercent: 'imageGCHighThresholdPercent',
      imageGCLowThresholdPercent: 'imageGCLowThresholdPercent',
      kubeAPIBurst: 'kubeAPIBurst',
      kubeAPIQPS: 'kubeAPIQPS',
      kubeReserved: 'kubeReserved',
      maxPods: 'maxPods',
      memoryManagerPolicy: 'memoryManagerPolicy',
      podPidsLimit: 'podPidsLimit',
      readOnlyPort: 'readOnlyPort',
      registryBurst: 'registryBurst',
      registryPullQPS: 'registryPullQPS',
      reservedMemory: 'reservedMemory',
      serializeImagePulls: 'serializeImagePulls',
      serverTLSBootstrap: 'serverTLSBootstrap',
      systemReserved: 'systemReserved',
      topologyManagerPolicy: 'topologyManagerPolicy',
      tracing: 'tracing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUnsafeSysctls: { 'type': 'array', 'itemType': 'string' },
      clusterDNS: { 'type': 'array', 'itemType': 'string' },
      containerLogMaxFiles: 'number',
      containerLogMaxSize: 'string',
      containerLogMaxWorkers: 'number',
      containerLogMonitorInterval: 'string',
      cpuCFSQuota: 'boolean',
      cpuCFSQuotaPeriod: 'string',
      cpuManagerPolicy: 'string',
      eventBurst: 'number',
      eventRecordQPS: 'number',
      evictionHard: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evictionSoft: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evictionSoftGracePeriod: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      featureGates: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      imageGCHighThresholdPercent: 'number',
      imageGCLowThresholdPercent: 'number',
      kubeAPIBurst: 'number',
      kubeAPIQPS: 'number',
      kubeReserved: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxPods: 'number',
      memoryManagerPolicy: 'string',
      podPidsLimit: 'number',
      readOnlyPort: 'number',
      registryBurst: 'number',
      registryPullQPS: 'number',
      reservedMemory: { 'type': 'array', 'itemType': KubeletConfigReservedMemory },
      serializeImagePulls: 'boolean',
      serverTLSBootstrap: 'boolean',
      systemReserved: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      topologyManagerPolicy: 'string',
      tracing: KubeletConfigTracing,
    };
  }

  validate() {
    if(Array.isArray(this.allowedUnsafeSysctls)) {
      $dara.Model.validateArray(this.allowedUnsafeSysctls);
    }
    if(Array.isArray(this.clusterDNS)) {
      $dara.Model.validateArray(this.clusterDNS);
    }
    if(this.evictionHard) {
      $dara.Model.validateMap(this.evictionHard);
    }
    if(this.evictionSoft) {
      $dara.Model.validateMap(this.evictionSoft);
    }
    if(this.evictionSoftGracePeriod) {
      $dara.Model.validateMap(this.evictionSoftGracePeriod);
    }
    if(this.featureGates) {
      $dara.Model.validateMap(this.featureGates);
    }
    if(this.kubeReserved) {
      $dara.Model.validateMap(this.kubeReserved);
    }
    if(Array.isArray(this.reservedMemory)) {
      $dara.Model.validateArray(this.reservedMemory);
    }
    if(this.systemReserved) {
      $dara.Model.validateMap(this.systemReserved);
    }
    if(this.tracing && typeof (this.tracing as any).validate === 'function') {
      (this.tracing as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

