// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListApiCallDailyDetailResultDetails extends $dara.Model {
  apiName?: string;
  avgLatency?: number;
  billDate?: string;
  engineType?: string;
  failedCount?: number;
  p90Latency?: number;
  p95Latency?: number;
  requestMaxQps?: number;
  subAccountId?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      avgLatency: 'avgLatency',
      billDate: 'billDate',
      engineType: 'engineType',
      failedCount: 'failedCount',
      p90Latency: 'p90Latency',
      p95Latency: 'p95Latency',
      requestMaxQps: 'requestMaxQps',
      subAccountId: 'subAccountId',
      successCount: 'successCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      avgLatency: 'number',
      billDate: 'string',
      engineType: 'string',
      failedCount: 'number',
      p90Latency: 'number',
      p95Latency: 'number',
      requestMaxQps: 'number',
      subAccountId: 'string',
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiCallDailyDetailResult extends $dara.Model {
  details?: ListApiCallDailyDetailResultDetails[];
  static names(): { [key: string]: string } {
    return {
      details: 'details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ListApiCallDailyDetailResultDetails },
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

