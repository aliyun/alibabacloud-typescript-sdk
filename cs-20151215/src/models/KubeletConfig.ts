// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class KubeletConfigReservedMemory extends $dara.Model {
  limits?: { [key: string]: any };
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
   * @example
   * localhost:4317
   */
  endpoint?: string;
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
  allowedUnsafeSysctls?: string[];
  clusterDNS?: string[];
  /**
   * @example
   * 5
   */
  containerLogMaxFiles?: number;
  /**
   * @example
   * 10Mi
   */
  containerLogMaxSize?: string;
  /**
   * @example
   * 1
   */
  containerLogMaxWorkers?: number;
  /**
   * @example
   * 10s
   */
  containerLogMonitorInterval?: string;
  /**
   * @example
   * true
   */
  cpuCFSQuota?: boolean;
  /**
   * @example
   * 100ms
   */
  cpuCFSQuotaPeriod?: string;
  /**
   * @example
   * none
   */
  cpuManagerPolicy?: string;
  /**
   * @example
   * 10
   */
  eventBurst?: number;
  /**
   * @example
   * 5
   */
  eventRecordQPS?: number;
  evictionHard?: { [key: string]: any };
  evictionSoft?: { [key: string]: any };
  evictionSoftGracePeriod?: { [key: string]: any };
  featureGates?: { [key: string]: any };
  /**
   * @example
   * 85
   */
  imageGCHighThresholdPercent?: number;
  /**
   * @example
   * 80
   */
  imageGCLowThresholdPercent?: number;
  /**
   * @example
   * 10
   */
  kubeAPIBurst?: number;
  /**
   * @example
   * 5
   */
  kubeAPIQPS?: number;
  kubeReserved?: { [key: string]: any };
  /**
   * @example
   * 110
   */
  maxPods?: number;
  /**
   * @example
   * none
   */
  memoryManagerPolicy?: string;
  /**
   * @example
   * -1
   */
  podPidsLimit?: number;
  /**
   * @example
   * 0
   */
  readOnlyPort?: number;
  /**
   * @example
   * 10
   */
  registryBurst?: number;
  /**
   * @example
   * 5
   */
  registryPullQPS?: number;
  reservedMemory?: KubeletConfigReservedMemory[];
  /**
   * @example
   * true
   */
  serializeImagePulls?: boolean;
  serverTLSBootstrap?: boolean;
  systemReserved?: { [key: string]: any };
  /**
   * @example
   * restricted
   */
  topologyManagerPolicy?: string;
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

