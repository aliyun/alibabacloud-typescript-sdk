// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanResponseBodyEngineSnapshot extends $dara.Model {
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

export class CreateScanResponseBodyScanMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 1
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
   * 11
   */
  tokenTotal?: number;
  static names(): { [key: string]: string } {
    return {
      fileCount: 'fileCount',
      linesOfCode: 'linesOfCode',
      tokenTotal: 'tokenTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateScanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code package ID.
   * 
   * @example
   * 111
   */
  codeBundleId?: number;
  /**
   * @remarks
   * The creation time.
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
   * The supported types.
   */
  engineSnapshot?: CreateScanResponseBodyEngineSnapshot;
  /**
   * @remarks
   * The scan end time.
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
   * The type. Valid values:
   * * full: full data
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
   * 11
   */
  projectId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @remarks
   * The scan information.
   */
  scanMetrics?: CreateScanResponseBodyScanMetrics;
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
   * The start time.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  startedAt?: string;
  /**
   * @remarks
   * The status. Valid values:
   * * running: Running.
   * * completed: Completed.
   * * failed: Failed.
   * * canceling: Being canceled.
   * * canceled: Canceled.
   * 
   * @example
   * running
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
   * The update time.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
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
      engineSnapshot: 'engineSnapshot',
      finishedAt: 'finishedAt',
      id: 'id',
      kind: 'kind',
      projectId: 'projectId',
      requestId: 'requestId',
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
      engineSnapshot: CreateScanResponseBodyEngineSnapshot,
      finishedAt: 'string',
      id: 'number',
      kind: 'string',
      projectId: 'number',
      requestId: 'string',
      scanMetrics: CreateScanResponseBodyScanMetrics,
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

