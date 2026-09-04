// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanResponseBodyEngineSnapshot extends $dara.Model {
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

export class DescribeScanResponseBodyScanMetrics extends $dara.Model {
  /**
   * @example
   * 1
   */
  credit?: number;
  /**
   * @example
   * 73894
   */
  fileCount?: number;
  /**
   * @example
   * 1
   */
  linesOfCode?: number;
  /**
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
  /**
   * @example
   * discovery
   */
  currentPhase?: string;
  engineSnapshot?: DescribeScanResponseBodyEngineSnapshot;
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
   * 1111
   */
  projectId?: number;
  /**
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  scanMetrics?: DescribeScanResponseBodyScanMetrics;
  /**
   * @example
   * 40
   */
  scanProgress?: number;
  /**
   * @example
   * 1
   */
  securityCredits?: number;
  /**
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  startedAt?: string;
  /**
   * @example
   * completed
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

