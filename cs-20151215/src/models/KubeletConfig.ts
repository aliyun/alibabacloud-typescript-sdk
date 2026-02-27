// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class KubeletConfigReservedMemory extends $dara.Model {
  /**
   * @remarks
   * The memory limit.
   * 
   * @example
   * {"memory": "1Gi"}
   */
  limits?: { [key: string]: any };
  /**
   * @remarks
   * The NUMA node identifier.
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
   * The number of samples to be collected per million spans.
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
   * The whitelisted unsafe sysctls.
   */
  allowedUnsafeSysctls?: string[];
  /**
   * @remarks
   * The list of IP addresses of the DNS servers.
   */
  clusterDNS?: string[];
  /**
   * @remarks
   * The maximum number of log files that can be stored in each container.
   * 
   * @example
   * 5
   */
  containerLogMaxFiles?: number;
  /**
   * @remarks
   * The maximum size that a log file can reach before it is rotated.
   * 
   * @example
   * 10Mi
   */
  containerLogMaxSize?: string;
  /**
   * @remarks
   * The maximum number of concurrent programs that rotate logs
   * 
   * @example
   * 1
   */
  containerLogMaxWorkers?: number;
  /**
   * @remarks
   * The duration at which the container logs are monitored for rotating logs.
   * 
   * @example
   * 10s
   */
  containerLogMonitorInterval?: string;
  /**
   * @remarks
   * Specifies whether to use Completely Fair Scheduler (CFS) quota to enforce pod CPU limits.
   * 
   * @example
   * true
   */
  cpuCFSQuota?: boolean;
  /**
   * @remarks
   * The duration for the CPU CFS quota.
   * 
   * @example
   * 100ms
   */
  cpuCFSQuotaPeriod?: string;
  /**
   * @remarks
   * The CPU management policy used by kubelet.
   * 
   * @example
   * none
   */
  cpuManagerPolicy?: string;
  /**
   * @remarks
   * The maximum number of burst peaks for the event records.
   * 
   * @example
   * 10
   */
  eventBurst?: number;
  /**
   * @remarks
   * Specifies the maximum number of events that can be generated per second.
   * 
   * @example
   * 5
   */
  eventRecordQPS?: number;
  /**
   * @remarks
   * A set of eviction thresholds that will trigger a pod eviction if met.
   */
  evictionHard?: { [key: string]: any };
  /**
   * @remarks
   * A set of eviction thresholds that will trigger a pod eviction if met over a corresponding grace period.
   */
  evictionSoft?: { [key: string]: any };
  /**
   * @remarks
   * A set of grace periods for eviction thresholds.
   */
  evictionSoftGracePeriod?: { [key: string]: any };
  /**
   * @remarks
   * A feature gate that is used to enable an experimental feature.
   */
  featureGates?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of disk usage after which image garbage collection always runs.
   * 
   * @example
   * 85
   */
  imageGCHighThresholdPercent?: number;
  /**
   * @remarks
   * The percentage of disk usage before which image garbage collection never runs.
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
   * The QPS when kubelet communicates with the Kubernetes API server.
   * 
   * @example
   * 5
   */
  kubeAPIQPS?: number;
  /**
   * @remarks
   * A set of configurations that specify resources reserved for the Kubernetes system.
   */
  kubeReserved?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of running pods.
   * 
   * @example
   * 110
   */
  maxPods?: number;
  /**
   * @remarks
   * The name of the policy to be used by the memory manager.
   * 
   * @example
   * none
   */
  memoryManagerPolicy?: string;
  /**
   * @remarks
   * The maximum number of processes per pod.
   * 
   * @example
   * -1
   */
  podPidsLimit?: number;
  /**
   * @remarks
   * The read-only port.
   * 
   * @example
   * 0
   */
  readOnlyPort?: number;
  /**
   * @remarks
   * The maximum number of images that can be pulled from bursty image pulls.
   * 
   * @example
   * 10
   */
  registryBurst?: number;
  /**
   * @remarks
   * The maximum queries per second (QPS) of the image repository.
   * 
   * @example
   * 5
   */
  registryPullQPS?: number;
  /**
   * @remarks
   * A list of configurations that specify memory reservations for non-uniform memory access (NUMA) nodes.
   */
  reservedMemory?: KubeletConfigReservedMemory[];
  /**
   * @remarks
   * Specifies whether to pull one image at a time.
   * 
   * @example
   * true
   */
  serializeImagePulls?: boolean;
  serverTLSBootstrap?: boolean;
  /**
   * @remarks
   * A set of configurations that specify reserved resources for the system.
   */
  systemReserved?: { [key: string]: any };
  /**
   * @remarks
   * The name of the Topology Manager policy that you want to use.
   * 
   * @example
   * restricted
   */
  topologyManagerPolicy?: string;
  /**
   * @remarks
   * The versioned configuration information for the Managed Service for OpenTelemetry client.
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

