// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorUsageRequest extends $dara.Model {
  apiKeyIds?: number[];
  /**
   * @example
   * 2026-06-02T00:00Z
   */
  endTime?: string;
  /**
   * @example
   * model
   */
  groupBy?: string;
  keys?: string[];
  modelNames?: string[];
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * 2026-06-01T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyIds: 'ApiKeyIds',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      keys: 'Keys',
      modelNames: 'ModelNames',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyIds: { 'type': 'array', 'itemType': 'number' },
      endTime: 'string',
      groupBy: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
      modelNames: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeyIds)) {
      $dara.Model.validateArray(this.apiKeyIds);
    }
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.modelNames)) {
      $dara.Model.validateArray(this.modelNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

