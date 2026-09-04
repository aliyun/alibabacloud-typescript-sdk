// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanResponseBodyEngineSnapshot extends $dara.Model {
  /**
   * @example
   * true
   */
  sast?: boolean;
  /**
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
   * @example
   * 1
   */
  fileCount?: number;
  /**
   * @example
   * 11
   */
  linesOfCode?: number;
  /**
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
   * @example
   * 111
   */
  codeBundleId?: number;
  /**
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  createdAt?: string;
  /**
   * @example
   * 3221
   */
  createdBy?: string;
  engineSnapshot?: CreateScanResponseBodyEngineSnapshot;
  /**
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  finishedAt?: string;
  /**
   * @example
   * 111
   */
  id?: number;
  /**
   * @example
   * full
   */
  kind?: string;
  /**
   * @example
   * 11
   */
  projectId?: number;
  /**
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  scanMetrics?: CreateScanResponseBodyScanMetrics;
  /**
   * @example
   * 40
   */
  scanProgress?: number;
  /**
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  startedAt?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * name
   */
  taskName?: string;
  /**
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  updatedAt?: string;
  /**
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

