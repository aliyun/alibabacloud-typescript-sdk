// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanResponseBodyEngineSnapshot extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Static Application Security Testing (SAST) is supported.
   * 
   * @example
   * true
   */
  sast?: boolean;
  /**
   * @remarks
   * Indicates whether Software Composition Analysis (SCA) is supported.
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

export class DescribeScanResponseBodyScanMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of credits consumed by the task.
   * 
   * @example
   * 1
   */
  credit?: number;
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 73894
   */
  fileCount?: number;
  /**
   * @remarks
   * The number of lines of code.
   * 
   * @example
   * 1
   */
  linesOfCode?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is no longer used.
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

export class DescribeScanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The function code package ID.
   * 
   * @example
   * 111
   */
  codeBundleId?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The user ID of the task creator.
   * 
   * @example
   * 3221
   */
  createdBy?: string;
  /**
   * @remarks
   * The scan phase. Valid values:
   * * threat_model: threat modeling.
   * * discovery: vulnerability discovery.
   * * panel: vulnerability review.
   * * adversarial: adversarial verification.
   * * finalize: report compilation.
   * 
   * @example
   * discovery
   */
  currentPhase?: string;
  /**
   * @remarks
   * The supported engine types.
   */
  engineSnapshot?: DescribeScanResponseBodyEngineSnapshot;
  /**
   * @remarks
   * The time when the scan finished.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 111
   */
  id?: number;
  /**
   * @remarks
   * The scan type. Valid values:
   * * full: full
   * * incremental: incremental
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
   * 1111
   */
  projectId?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @remarks
   * The scan results.
   */
  scanMetrics?: DescribeScanResponseBodyScanMetrics;
  /**
   * @remarks
   * The task progress.
   * 
   * @example
   * 40
   */
  scanProgress?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is no longer used.
   * 
   * @example
   * 1
   */
  securityCredits?: number;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  startedAt?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
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
   * name
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the task was last updated.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is no longer used.
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
      requestId: 'requestId',
      scanMetrics: 'scanMetrics',
      scanProgress: 'scanProgress',
      securityCredits: 'securityCredits',
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
      engineSnapshot: DescribeScanResponseBodyEngineSnapshot,
      finishedAt: 'string',
      id: 'number',
      kind: 'string',
      projectId: 'number',
      requestId: 'string',
      scanMetrics: DescribeScanResponseBodyScanMetrics,
      scanProgress: 'number',
      securityCredits: 'number',
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

