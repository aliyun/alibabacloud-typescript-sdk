// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics } from "./ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics";


export class ListTrainingJobInstanceMetricsResponseBody extends $dara.Model {
  instanceMetrics?: ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics[];
  /**
   * @example
   * F082BD0D-21E1-5F9B-81A0-AB07485B03CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceMetrics: 'InstanceMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMetrics: { 'type': 'array', 'itemType': ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceMetrics)) {
      $dara.Model.validateArray(this.instanceMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

