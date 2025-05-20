// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingConfigResponseBodyDataStorage extends $dara.Model {
  /**
   * @remarks
   * The average storage usage threshold that triggers automatic storage expansion. Unit: %.
   * 
   * @example
   * 70
   */
  diskUsageUpperThreshold?: number;
  /**
   * @remarks
   * The maximum storage size. Unit: GB.
   * 
   * @example
   * 32000
   */
  maxStorage?: number;
  /**
   * @remarks
   * Indicates whether the automatic storage expansion feature is enabled. Valid values:
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
      diskUsageUpperThreshold: 'DiskUsageUpperThreshold',
      maxStorage: 'MaxStorage',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskUsageUpperThreshold: 'number',
      maxStorage: 'number',
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

