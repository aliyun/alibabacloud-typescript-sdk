// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScansResponseBodyItemsEngineSnapshot extends $dara.Model {
  /**
   * @remarks
   * Indicates whether SAST is supported.
   * 
   * @example
   * true
   */
  sast?: boolean;
  /**
   * @remarks
   * Indicates whether SCA is supported.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The number of credits consumed by the task.
   * 
   * @example
   * 1.25
   */
  credit?: number;
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 459
   */
  fileCount?: number;
  /**
   * @remarks
   * The number of lines of code.
   * 
   * @example
   * 11
   */
  linesOfCode?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The code bundle ID.
   * 
   * @example
   * 11
   */
  codeBundleId?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2026-07-28T03:36:31.573Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The user ID of the task creator.
   * 
   * @example
   * 11111
   */
  createdBy?: string;
  /**
   * @remarks
   * The scan phase. Valid values:
   * * threat_model: Threat modeling.
   * * discovery: Vulnerability discovery.
   * * panel: Vulnerability review.
   * * adversarial: Adversarial verification.
   * * finalize: Report generation.
   * 
   * @example
   * finalize
   */
  currentPhase?: string;
  /**
   * @remarks
   * The supported scan types.
   */
  engineSnapshot?: DescribeScansResponseBodyItemsEngineSnapshot;
  /**
   * @remarks
   * The time when the scan finished.
   * 
   * @example
   * 2026-07-28T03:36:31.573Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 934
   */
  id?: number;
  /**
   * @remarks
   * The scan type. Valid values:
   * * full: Full scan.
   * * incremental: Incremental scan.
   * 
   * @example
   * full
   */
  kind?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-n72k9yrkq81ny7z
   */
  projectId?: number;
  /**
   * @remarks
   * The scan result statistics information.
   */
  scanMetrics?: DescribeScansResponseBodyItemsScanMetrics;
  /**
   * @remarks
   * The task progress.
   * 
   * @example
   * 100
   */
  scanProgress?: number;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 2026-07-28T03:36:31.573Z
   */
  startedAt?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * * running: Running.
   * * completed: Completed.
   * * failed: Failed.
   * * canceling: Being canceled. 
   * * canceled: Canceled.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 1648622222394847-ha-cn-lm64p7tby01_dsl_kb_video_1773817008236_full
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the task was last updated.
   * 
   * @example
   * 2026-07-28T03:36:31.573Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * 1
   */
  workerId?: string;
  static names(): { [key: string]: string } {
    return {
      codeBundleId: 'codeBundleId',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      currentPhase: 'currentPhase',
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
      currentPhase: 'string',
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
  /**
   * @remarks
   * The task list.
   */
  items?: DescribeScansResponseBodyItems[];
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. An empty value indicates the last page.
   * 
   * @example
   * eyJ0IjoiMjAyNi0wNy0xNlQwNzo1MzozOC4wMjFaIiwiaSI6MTAwMDQ0OH0
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
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

