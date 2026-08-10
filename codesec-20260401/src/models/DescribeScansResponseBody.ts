// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScansResponseBodyItemsEngineSnapshot extends $dara.Model {
  sast?: boolean;
  sca?: boolean;
  static names(): { [key: string]: string } {
    return {
      sast: 'sast',
      sca: 'sca',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sast: 'boolean',
      sca: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScansResponseBodyItemsScanMetrics extends $dara.Model {
  credit?: number;
  fileCount?: number;
  linesOfCode?: number;
  tokenTotal?: number;
  static names(): { [key: string]: string } {
    return {
      credit: 'credit',
      fileCount: 'fileCount',
      linesOfCode: 'linesOfCode',
      tokenTotal: 'tokenTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credit: 'number',
      fileCount: 'number',
      linesOfCode: 'number',
      tokenTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScansResponseBodyItems extends $dara.Model {
  codeBundleId?: number;
  /**
   * @remarks
   * 扫描任务创建时间（RFC3339）
   */
  createdAt?: string;
  createdBy?: string;
  engineSnapshot?: DescribeScansResponseBodyItemsEngineSnapshot;
  /**
   * @remarks
   * 扫描结束时间（RFC3339）
   */
  finishedAt?: string;
  id?: number;
  kind?: string;
  projectId?: number;
  scanMetrics?: DescribeScansResponseBodyItemsScanMetrics;
  scanProgress?: number;
  /**
   * @remarks
   * 扫描开始时间（RFC3339）
   */
  startedAt?: string;
  status?: string;
  taskName?: string;
  /**
   * @remarks
   * 扫描任务更新时间（RFC3339）
   */
  updatedAt?: string;
  workerId?: string;
  static names(): { [key: string]: string } {
    return {
      codeBundleId: 'codeBundleId',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      engineSnapshot: 'engineSnapshot',
      finishedAt: 'finishedAt',
      id: 'id',
      kind: 'kind',
      projectId: 'projectId',
      scanMetrics: 'scanMetrics',
      scanProgress: 'scanProgress',
      startedAt: 'startedAt',
      status: 'status',
      taskName: 'taskName',
      updatedAt: 'updatedAt',
      workerId: 'workerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeBundleId: 'number',
      createdAt: 'string',
      createdBy: 'string',
      engineSnapshot: DescribeScansResponseBodyItemsEngineSnapshot,
      finishedAt: 'string',
      id: 'number',
      kind: 'string',
      projectId: 'number',
      scanMetrics: DescribeScansResponseBodyItemsScanMetrics,
      scanProgress: 'number',
      startedAt: 'string',
      status: 'string',
      taskName: 'string',
      updatedAt: 'string',
      workerId: 'string',
    };
  }

  validate() {
    if(this.engineSnapshot && typeof (this.engineSnapshot as any).validate === 'function') {
      (this.engineSnapshot as any).validate();
    }
    if(this.scanMetrics && typeof (this.scanMetrics as any).validate === 'function') {
      (this.scanMetrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScansResponseBody extends $dara.Model {
  items?: DescribeScansResponseBodyItems[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeScansResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

