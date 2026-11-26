// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorUsageResponseBodyKeysSeriesValues extends $dara.Model {
  /**
   * @remarks
   * The specific metric information, which consists of the time and the metric value.
   */
  point?: string[];
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.point)) {
      $dara.Model.validateArray(this.point);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOperatorUsageResponseBodyKeysSeries extends $dara.Model {
  /**
   * @remarks
   * This value is returned only when GroupBy includes api_key.
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The model name if GroupBy includes model, or the api_key_id string if GroupBy includes only api_key.
   * 
   * @example
   * qwen3.6-plus
   */
  name?: string;
  /**
   * @remarks
   * The normalized GroupBy value: model, api_key, or model,api_key.
   * 
   * @example
   * model
   */
  role?: string;
  /**
   * @remarks
   * The list of metric values. Each value corresponds to a collection time point.
   */
  values?: DescribeModelOperatorUsageResponseBodyKeysSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      name: 'Name',
      role: 'Role',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      name: 'string',
      role: 'string',
      values: { 'type': 'array', 'itemType': DescribeModelOperatorUsageResponseBodyKeysSeriesValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOperatorUsageResponseBodyKeys extends $dara.Model {
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * request_count
   */
  name?: string;
  /**
   * @remarks
   * The metric value set.
   */
  series?: DescribeModelOperatorUsageResponseBodyKeysSeries[];
  /**
   * @remarks
   * The unit. Valid values:
   * 
   * - requests
   * - tokens
   * - %
   * 
   * @example
   * requests
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeModelOperatorUsageResponseBodyKeysSeries },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOperatorUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The format is <i>YYYY-MM-DDThh:mmZ</i> (UTC time).
   * 
   * @example
   * 2026-06-02T00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of metric values.
   */
  keys?: DescribeModelOperatorUsageResponseBodyKeys[];
  /**
   * @remarks
   * The final bucket size used in seconds.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The format is <i>YYYY-MM-DDThh:mmZ</i> (UTC time).
   * 
   * @example
   * 2026-06-01T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      keys: 'Keys',
      period: 'Period',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      keys: { 'type': 'array', 'itemType': DescribeModelOperatorUsageResponseBodyKeys },
      period: 'number',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

