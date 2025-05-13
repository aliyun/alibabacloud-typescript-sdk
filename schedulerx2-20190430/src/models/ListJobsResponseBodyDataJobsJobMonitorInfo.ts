// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo } from "./ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo";
import { ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig } from "./ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig";


export class ListJobsResponseBodyDataJobsJobMonitorInfo extends $dara.Model {
  /**
   * @remarks
   * The contact information.
   */
  contactInfo?: ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo[];
  /**
   * @remarks
   * The configurations of the alerting feature and the alert threshold.
   */
  monitorConfig?: ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig;
  static names(): { [key: string]: string } {
    return {
      contactInfo: 'ContactInfo',
      monitorConfig: 'MonitorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInfo: { 'type': 'array', 'itemType': ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo },
      monitorConfig: ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig,
    };
  }

  validate() {
    if(Array.isArray(this.contactInfo)) {
      $dara.Model.validateArray(this.contactInfo);
    }
    if(this.monitorConfig && typeof (this.monitorConfig as any).validate === 'function') {
      (this.monitorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

