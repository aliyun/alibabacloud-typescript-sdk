// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * edas:ReadSchedulerxDesignateInfo
   */
  authAction?: string;
  /**
   * @example
   * 209312833131416xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 1827811800526xxx
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFn/cLPZ/3Cz0YxQkZBMjVGLTY0REUtNTlGNS05NzUwLTgyMUE4M0MwMTFDRQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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
   * @example
   * 0
   */
  cpuLoad1?: number;
  /**
   * @example
   * 0
   */
  cpuLoad5?: number;
  /**
   * @example
   * 1
   */
  cpuProcessors?: number;
  /**
   * @example
   * 1024
   */
  diskMax?: number;
  /**
   * @example
   * 0.19142496008515167
   */
  diskUsage?: number;
  /**
   * @example
   * 148
   */
  diskUsed?: number;
  /**
   * @example
   * 56
   */
  execCount?: number;
  /**
   * @example
   * 0.06072874493927125
   */
  heap1Usage?: number;
  /**
   * @example
   * 14
   */
  heap1Used?: number;
  /**
   * @example
   * 0.06477732793522267
   */
  heap5Usage?: number;
  /**
   * @example
   * 500
   */
  heapMax?: number;
  /**
   * @example
   * 72
   */
  sharePoolAvailableSize?: number;
  /**
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
   * @example
   * FREE
   */
  busy?: string;
  /**
   * @example
   * true
   */
  checked?: boolean;
  /**
   * @example
   * 10.52.169.25
   */
  key?: string;
  metrics?: ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVosMetrics;
  /**
   * @example
   * fasle
   */
  offline?: boolean;
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * pod
   */
  starter?: string;
  /**
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
   * -
   */
  designateDetailVos?: ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos[];
  /**
   * @example
   * 1
   */
  designateType?: number;
  /**
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
  accessDeniedDetail?: ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ReadSchedulerxDesignateInfoResponseBodyData;
  /**
   * @example
   * jobId=xxx is not existed
   */
  message?: string;
  /**
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
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

