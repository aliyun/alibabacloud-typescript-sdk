// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDIJobMetricsResponseBodyPagingInfoJobMetrics } from "./ListDijobMetricsResponseBodyPagingInfoJobMetrics";


export class ListDIJobMetricsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The metrics returned.
   */
  jobMetrics?: ListDIJobMetricsResponseBodyPagingInfoJobMetrics[];
  static names(): { [key: string]: string } {
    return {
      jobMetrics: 'JobMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobMetrics: { 'type': 'array', 'itemType': ListDIJobMetricsResponseBodyPagingInfoJobMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.jobMetrics)) {
      $dara.Model.validateArray(this.jobMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

