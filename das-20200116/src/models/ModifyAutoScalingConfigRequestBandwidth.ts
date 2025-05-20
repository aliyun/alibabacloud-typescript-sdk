// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoScalingConfigRequestBandwidth extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the **Bandwidth** configuration of the bandwidth auto scaling feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The average bandwidth usage threshold that triggers automatic bandwidth downgrade. Unit: %. Valid values:
   * 
   * *   **10**
   * *   **20**
   * *   **30**
   * 
   * @example
   * 30
   * 
   * **if can be null:**
   * true
   */
  bandwidthUsageLowerThreshold?: number;
  /**
   * @remarks
   * The average bandwidth usage threshold that triggers automatic bandwidth upgrade. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * *   **95**
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  bandwidthUsageUpperThreshold?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic bandwidth downgrade. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The observation window of the bandwidth auto scaling feature. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute. Valid values:
   * 
   * *   **1m**
   * *   **5m**
   * *   **10m**
   * *   **15m**
   * *   **30m**
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic bandwidth upgrade. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      bandwidthUsageLowerThreshold: 'BandwidthUsageLowerThreshold',
      bandwidthUsageUpperThreshold: 'BandwidthUsageUpperThreshold',
      downgrade: 'Downgrade',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
      bandwidthUsageLowerThreshold: 'number',
      bandwidthUsageUpperThreshold: 'number',
      downgrade: 'boolean',
      observationWindowSize: 'string',
      upgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

