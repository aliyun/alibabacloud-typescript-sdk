// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The requested operation that was denied.
   * 
   * @example
   * edas:ReadSchedulerxDesignateInfo
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the Principal.
   * 
   * @example
   * 209312833131416xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the Principal belongs.
   * 
   * @example
   * 1827811800526xxx
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the Principal.
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
   * The type of permission denial.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of Policy that caused the denial.
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

export class ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVosMetrics extends $dara.Model {
  /**
   * @remarks
   * The most recent CPU Load.
   * 
   * @example
   * 0
   */
  cpuLoad1?: number;
  /**
   * @remarks
   * The average CPU Load over the last five minutes.
   * 
   * @example
   * 0
   */
  cpuLoad5?: number;
  /**
   * @remarks
   * The number of available CPU cores.
   * 
   * @example
   * 1
   */
  cpuProcessors?: number;
  /**
   * @remarks
   * The total disk capacity, in MB.
   * 
   * @example
   * 1024
   */
  diskMax?: number;
  /**
   * @remarks
   * The Disk Usage, as a percentage.
   * 
   * @example
   * 0.19142496008515167
   */
  diskUsage?: number;
  /**
   * @remarks
   * The used disk space, in MB.
   * 
   * @example
   * 148
   */
  diskUsed?: number;
  /**
   * @remarks
   * The number of task executions.
   * 
   * @example
   * 56
   */
  execCount?: number;
  /**
   * @remarks
   * The most recent Heap Memory usage, as a percentage.
   * 
   * @example
   * 0.06072874493927125
   */
  heap1Usage?: number;
  /**
   * @remarks
   * The amount of Heap Memory used in the most recent measurement, in MB.
   * 
   * @example
   * 14
   */
  heap1Used?: number;
  /**
   * @remarks
   * The average Heap Memory usage over the last five minutes, as a percentage.
   * 
   * @example
   * 0.06477732793522267
   */
  heap5Usage?: number;
  /**
   * @remarks
   * The maximum available Heap Memory, in MB.
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
   * The size of the queue in the shared pool.
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

export class ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos extends $dara.Model {
  /**
   * @remarks
   * The status of the Worker. Valid values:
   * 
   * - `FREE`: The Worker is idle.
   * 
   * - `LOAD5_BUSY`: The 5-minute average CPU Load is high.
   * 
   * - `HEAP5_BUSY`: The 5-minute average Heap Memory usage is high.
   * 
   * - `DISK_BUSY`: The Disk Usage is high.
   * 
   * @example
   * FREE
   */
  busy?: string;
  /**
   * @remarks
   * Indicates whether the Worker is designated. Valid values:
   * 
   * - `true`: The Worker is designated.
   * 
   * - `false`: The Worker is not designated.
   * 
   * @example
   * true
   */
  checked?: boolean;
  /**
   * @remarks
   * The value of the key. The meaning of this parameter depends on the value of the `DesignateType` parameter.
   * 
   * - If `DesignateType` is `1`, this parameter indicates the address of the Worker.
   * 
   * - If `DesignateType` is `2`, this parameter indicates the Tag of the Worker.
   * 
   * @example
   * 10.52.169.25
   */
  key?: string;
  /**
   * @remarks
   * The performance metrics for the Worker.
   */
  metrics?: ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVosMetrics;
  /**
   * @remarks
   * Indicates whether the Worker is offline.
   * 
   * @example
   * fasle
   */
  offline?: boolean;
  /**
   * @remarks
   * The number of Workers.
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * The startup mode of the Worker.
   * 
   * @example
   * pod
   */
  starter?: string;
  /**
   * @remarks
   * The version of the Worker.
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
      metrics: ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVosMetrics,
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

export class ReadSchedulerxDesignateInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * - The details of the designated Workers.
   */
  designateDetailVos?: ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos[];
  /**
   * @remarks
   * The type of designated resource. Valid values:
   * 
   * - `1`: The task is designated to run on a specific Worker.
   * 
   * - `2`: The task is designated to run on Workers with a specific tag.
   * 
   * > The default configuration for a task is to designate a specific Worker (`1`).
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * Indicates whether Failover is enabled. If enabled, the task can be scheduled on non-designated Workers if all designated Workers are offline. Valid values:
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * > By default, Failover is disabled (false).
   * 
   * @example
   * true
   */
  transferable?: boolean;
  static names(): { [key: string]: string } {
    return {
      designateDetailVos: 'DesignateDetailVos',
      designateType: 'DesignateType',
      transferable: 'Transferable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateDetailVos: { 'type': 'array', 'itemType': ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos },
      designateType: 'number',
      transferable: 'boolean',
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

export class ReadSchedulerxDesignateInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   */
  accessDeniedDetail?: ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * - The returned data object.
   */
  data?: ReadSchedulerxDesignateInfoResponseBodyData;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * jobId=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The unique Request ID.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
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
      accessDeniedDetail: ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail,
      code: 'number',
      data: ReadSchedulerxDesignateInfoResponseBodyData,
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

