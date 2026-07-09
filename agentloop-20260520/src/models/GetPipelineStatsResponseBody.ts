// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineStatsResponseBodySummary extends $dara.Model {
  /**
   * @example
   * 2500
   */
  avgElapsedMs?: number;
  /**
   * @example
   * 0
   */
  cancelledRuns?: number;
  /**
   * @example
   * 1735660800
   */
  committedWatermark?: number;
  /**
   * @example
   * 0
   */
  failedRuns?: number;
  /**
   * @example
   * 120
   */
  scheduleLagSeconds?: number;
  /**
   * @example
   * 44
   */
  succeededRuns?: number;
  /**
   * @example
   * 1.0
   */
  successRate?: number;
  /**
   * @example
   * 3221225472
   */
  totalOutputBytes?: number;
  /**
   * @example
   * 1200000
   */
  totalOutputRows?: number;
  /**
   * @example
   * 5368709120
   */
  totalProcessedBytes?: number;
  /**
   * @example
   * 1500000
   */
  totalProcessedRows?: number;
  /**
   * @example
   * 44
   */
  totalRuns?: number;
  static names(): { [key: string]: string } {
    return {
      avgElapsedMs: 'avgElapsedMs',
      cancelledRuns: 'cancelledRuns',
      committedWatermark: 'committedWatermark',
      failedRuns: 'failedRuns',
      scheduleLagSeconds: 'scheduleLagSeconds',
      succeededRuns: 'succeededRuns',
      successRate: 'successRate',
      totalOutputBytes: 'totalOutputBytes',
      totalOutputRows: 'totalOutputRows',
      totalProcessedBytes: 'totalProcessedBytes',
      totalProcessedRows: 'totalProcessedRows',
      totalRuns: 'totalRuns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgElapsedMs: 'number',
      cancelledRuns: 'number',
      committedWatermark: 'number',
      failedRuns: 'number',
      scheduleLagSeconds: 'number',
      succeededRuns: 'number',
      successRate: 'number',
      totalOutputBytes: 'number',
      totalOutputRows: 'number',
      totalProcessedBytes: 'number',
      totalProcessedRows: 'number',
      totalRuns: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineStatsResponseBodyTimeSeries extends $dara.Model {
  /**
   * @example
   * 2500
   */
  avgElapsedMs?: number;
  /**
   * @example
   * 322122547
   */
  outputBytes?: number;
  /**
   * @example
   * 80000
   */
  outputRows?: number;
  /**
   * @example
   * 536870912
   */
  processedBytes?: number;
  /**
   * @example
   * 100000
   */
  processedRows?: number;
  /**
   * @example
   * 5
   */
  runs?: number;
  /**
   * @example
   * 5
   */
  succeededRuns?: number;
  /**
   * @example
   * 1735574400
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      avgElapsedMs: 'avgElapsedMs',
      outputBytes: 'outputBytes',
      outputRows: 'outputRows',
      processedBytes: 'processedBytes',
      processedRows: 'processedRows',
      runs: 'runs',
      succeededRuns: 'succeededRuns',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgElapsedMs: 'number',
      outputBytes: 'number',
      outputRows: 'number',
      processedBytes: 'number',
      processedRows: 'number',
      runs: 'number',
      succeededRuns: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineStatsResponseBody extends $dara.Model {
  /**
   * @example
   * 1735660800
   */
  endTime?: number;
  /**
   * @example
   * Hour
   */
  granularity?: string;
  /**
   * @remarks
   * The name of the pipeline.
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The request ID, which is used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @example
   * 1735574400
   */
  startTime?: number;
  summary?: GetPipelineStatsResponseBodySummary;
  timeSeries?: GetPipelineStatsResponseBodyTimeSeries[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      granularity: 'granularity',
      pipelineName: 'pipelineName',
      requestId: 'requestId',
      startTime: 'startTime',
      summary: 'summary',
      timeSeries: 'timeSeries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'string',
      pipelineName: 'string',
      requestId: 'string',
      startTime: 'number',
      summary: GetPipelineStatsResponseBodySummary,
      timeSeries: { 'type': 'array', 'itemType': GetPipelineStatsResponseBodyTimeSeries },
    };
  }

  validate() {
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    if(Array.isArray(this.timeSeries)) {
      $dara.Model.validateArray(this.timeSeries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

