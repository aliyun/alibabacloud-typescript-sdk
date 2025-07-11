// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryStorageMetricResponseBodyDataMetrics } from "./QueryStorageMetricResponseBodyDataMetrics";


export class QueryStorageMetricResponseBodyData extends $dara.Model {
  /**
   * @example
   * storage
   */
  category?: string;
  metrics?: QueryStorageMetricResponseBodyDataMetrics[];
  /**
   * @example
   * summary
   */
  name?: string;
  /**
   * @example
   * 3600
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      metrics: 'metrics',
      name: 'name',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      metrics: { 'type': 'array', 'itemType': QueryStorageMetricResponseBodyDataMetrics },
      name: 'string',
      period: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

