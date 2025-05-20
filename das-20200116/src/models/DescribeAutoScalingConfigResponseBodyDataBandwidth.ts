// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingConfigResponseBodyDataBandwidth extends $dara.Model {
  /**
   * @remarks
   * The average bandwidth usage threshold that triggers automatic bandwidth downgrade. Unit: %.
   * 
   * @example
   * 30
   */
  bandwidthUsageLowerThreshold?: number;
  /**
   * @remarks
   * The average bandwidth usage threshold that triggers automatic bandwidth adjustment. Unit: %.
   * 
   * @example
   * 70
   */
  bandwidthUsageUpperThreshold?: number;
  /**
   * @remarks
   * Indicates whether the automatic bandwidth downgrade feature is enabled. Valid values:
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
   * The observation window of the automatic bandwidth adjustment feature. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Indicates whether the automatic bandwidth adjustment feature is enabled. Valid values:
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
      bandwidthUsageLowerThreshold: 'BandwidthUsageLowerThreshold',
      bandwidthUsageUpperThreshold: 'BandwidthUsageUpperThreshold',
      downgrade: 'Downgrade',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

