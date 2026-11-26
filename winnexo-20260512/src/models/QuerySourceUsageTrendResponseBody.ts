// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySourceUsageTrendResponseBodyTrend extends $dara.Model {
  /**
   * @remarks
   * The start time of the natural bucket with the selected time zone. The first bucket may start earlier than the startTime.
   * 
   * @example
   * Start time of the natural bucket with the selected time zone. The first bucket may start earlier than the startTime
   */
  bucketStart?: string;
  /**
   * @remarks
   * The number of retrieval recalls.
   * 
   * @example
   * 1
   */
  retrievalCount?: number;
  /**
   * @remarks
   * The deduplicated number of sources with retrieval events.
   * 
   * @example
   * 5
   */
  retrievedSourceCount?: number;
  /**
   * @remarks
   * The number of rows in the source data.
   * 
   * @example
   * 4
   */
  sourceCount?: number;
  /**
   * @remarks
   * The number of times used by the agent.
   * 
   * @example
   * 2
   */
  usageCount?: number;
  /**
   * @remarks
   * The deduplicated number of sources with usage events.
   * 
   * @example
   * 1
   */
  usedSourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      bucketStart: 'bucketStart',
      retrievalCount: 'retrievalCount',
      retrievedSourceCount: 'retrievedSourceCount',
      sourceCount: 'sourceCount',
      usageCount: 'usageCount',
      usedSourceCount: 'usedSourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketStart: 'string',
      retrievalCount: 'number',
      retrievedSourceCount: 'number',
      sourceCount: 'number',
      usageCount: 'number',
      usedSourceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySourceUsageTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The trend details.
   * 
   * @example
   * [{"bucketStart":"2026-11-01T00:00:00Z","retrievalCount":12,"usageCount":5}]
   */
  trend?: QuerySourceUsageTrendResponseBodyTrend[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      trend: 'trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      trend: { 'type': 'array', 'itemType': QuerySourceUsageTrendResponseBodyTrend },
    };
  }

  validate() {
    if(Array.isArray(this.trend)) {
      $dara.Model.validateArray(this.trend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

