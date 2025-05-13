// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo } from "./GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo";
import { GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig } from "./GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig";


export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo extends $dara.Model {
  /**
   * @remarks
   * The alert contact Information.
   */
  contactInfo?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo[];
  /**
   * @remarks
   * The configurations of the alerting features and the alert thresholds.
   */
  monitorConfig?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig;
  static names(): { [key: string]: string } {
    return {
      contactInfo: 'ContactInfo',
      monitorConfig: 'MonitorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInfo: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo },
      monitorConfig: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig,
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

