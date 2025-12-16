// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication operation.
   * 
   * @example
   * edas:ReadSchedulerxDesignateDetail
   */
  authAction?: string;
  /**
   * @remarks
   * The principal name.
   * 
   * @example
   * 209312833131416xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The account of the principal.
   * 
   * @example
   * 1827811800526xxx
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The principal type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
   * 
   * @example
   * AQFn/cLPZ/3Cz0YxQkZBMjVGLTY0REUtNTlGNS05NzUwLTgyMUE4M0MwMTFDRQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The permission denial type.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVosMetrics extends $dara.Model {
  /**
   * @remarks
   * The most recent value of CPU workload.
   * 
   * @example
   * 0
   */
  cpuLoad1?: number;
  /**
   * @remarks
   * The average of the latest five values of CPU workload.
   * 
   * @example
   * 0
   */
  cpuLoad5?: number;
  /**
   * @remarks
   * The number of available CPU processors.
   * 
   * @example
   * 1
   */
  cpuProcessors?: number;
  /**
   * @remarks
   * The total disk capacity in MB.
   * 
   * @example
   * 1024
   */
  diskMax?: number;
  /**
   * @remarks
   * The disk usage.
   * 
   * @example
   * 0.19142496008515167
   */
  diskUsage?: number;
  /**
   * @remarks
   * The used disk space in MB.
   * 
   * @example
   * 0.14865875
   */
  diskUsed?: number;
  /**
   * @remarks
   * The number of job executions.
   * 
   * @example
   * 56
   */
  execCount?: number;
  /**
   * @remarks
   * The most recent value of heap memory usage.
   * 
   * @example
   * 0.06072874493927125
   */
  heap1Usage?: number;
  /**
   * @remarks
   * The most recent value of used heap memory in MB.
   * 
   * @example
   * 14
   */
  heap1Used?: number;
  /**
   * @remarks
   * The average of the latest five values of heap memory usage.
   * 
   * @example
   * 0.06477732793522267
   */
  heap5Usage?: number;
  /**
   * @remarks
   * The maximum heap memory in MB.
   * 
   * @example
   * 500
   */
  heapMax?: number;
  /**
   * @remarks
   * The number of available resources in the shared pool.
   * 
   * @example
   * 72
   */
  sharePoolAvailableSize?: number;
  /**
   * @remarks
   * The queue size in the shared pool.
   * 
   * @example
   * 1
   */
  sharePoolQueueSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuLoad1: 'CpuLoad1',
      cpuLoad5: 'CpuLoad5',
      cpuProcessors: 'CpuProcessors',
      diskMax: 'DiskMax',
      diskUsage: 'DiskUsage',
      diskUsed: 'DiskUsed',
      execCount: 'ExecCount',
      heap1Usage: 'Heap1Usage',
      heap1Used: 'Heap1Used',
      heap5Usage: 'Heap5Usage',
      heapMax: 'HeapMax',
      sharePoolAvailableSize: 'SharePoolAvailableSize',
      sharePoolQueueSize: 'SharePoolQueueSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLoad1: 'number',
      cpuLoad5: 'number',
      cpuProcessors: 'number',
      diskMax: 'number',
      diskUsage: 'number',
      diskUsed: 'number',
      execCount: 'number',
      heap1Usage: 'number',
      heap1Used: 'number',
      heap5Usage: 'number',
      heapMax: 'number',
      sharePoolAvailableSize: 'number',
      sharePoolQueueSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVos extends $dara.Model {
  /**
   * @remarks
   * The status of the workers. Valid values: 
   * 
   * FREE: idle. 
   * LOAD5_BUSY: The average of the latest five values of CPU workload is too high. 
   * HEAP5_BUSY: The average of the latest five values of heap memory usage is too high. 
   * DISK_BUSY: The disk usage is too high.
   * 
   * @example
   * FREE
   */
  busy?: string;
  /**
   * @remarks
   * Indicates whether the workers are specified. Valid values: true and false.
   * 
   * @example
   * true
   */
  checked?: boolean;
  /**
   * @remarks
   * The information returned based on the value of the DesignateType parameter.
   * 
   * *   If you set the DesignateType parameter to 2, the tags of the workers are returned.
   * *   If you set the DesignateType parameter to 1, the IP addresses of the workers are returned.
   * 
   * @example
   * 10.52.169.25
   */
  key?: string;
  /**
   * @remarks
   * The metric values.
   */
  metrics?: ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVosMetrics;
  /**
   * @remarks
   * Indicates whether the workers are offline.
   * 
   * @example
   * fasle
   */
  offline?: boolean;
  /**
   * @remarks
   * The number of workers.
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * The startup method of the workers.
   * 
   * @example
   * pod
   */
  starter?: string;
  /**
   * @remarks
   * The version of the workers.
   * 
   * @example
   * 1.12.5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      busy: 'Busy',
      checked: 'Checked',
      key: 'Key',
      metrics: 'Metrics',
      offline: 'Offline',
      size: 'Size',
      starter: 'Starter',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      busy: 'string',
      checked: 'boolean',
      key: 'string',
      metrics: ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVosMetrics,
      offline: 'boolean',
      size: 'number',
      starter: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxDesignateDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * *
   */
  designateDetailVos?: ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVos[];
  static names(): { [key: string]: string } {
    return {
      designateDetailVos: 'DesignateDetailVos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateDetailVos: { 'type': 'array', 'itemType': ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVos },
    };
  }

  validate() {
    if(Array.isArray(this.designateDetailVos)) {
      $dara.Model.validateArray(this.designateDetailVos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxDesignateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   */
  accessDeniedDetail?: ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * Th status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * *
   */
  data?: ReadSchedulerxDesignateDetailResponseBodyData;
  /**
   * @remarks
   * The additional information returned only if an error occurs.
   * 
   * @example
   * Invalid parameter: jobId=368 invalid
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 883AFE93-FB03-4FA9-A958-E750C6DE120C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail,
      code: 'number',
      data: ReadSchedulerxDesignateDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

