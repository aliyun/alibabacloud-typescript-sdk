// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorUsageResponseBodyKeysSeriesValues extends $dara.Model {
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
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @example
   * qwen3.6-plus
   */
  name?: string;
  /**
   * @example
   * model
   */
  role?: string;
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
   * @example
   * request_count
   */
  name?: string;
  series?: DescribeModelOperatorUsageResponseBodyKeysSeries[];
  /**
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
   * @example
   * 2026-06-02T00:00Z
   */
  endTime?: string;
  keys?: DescribeModelOperatorUsageResponseBodyKeys[];
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
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

