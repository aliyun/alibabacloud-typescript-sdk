// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * edas:ReadSchedulerxDesignateDetail
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

export class ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVosMetrics extends $dara.Model {
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
   * 0.14865875
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

export class ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVos extends $dara.Model {
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
  metrics?: ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVosMetrics;
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
   * -
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
  accessDeniedDetail?: ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ReadSchedulerxDesignateDetailResponseBodyData;
  /**
   * @example
   * Invalid parameter: jobId=368 invalid
   */
  message?: string;
  /**
   * @example
   * 883AFE93-FB03-4FA9-A958-E750C6DE120C
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

