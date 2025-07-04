// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was created. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-03-26T03:33:56Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The category of the cloud disk or local disk. Valid values:
   * 
   * *   **cloud_efficiency**: ultra disk
   * *   **cloud_ssd**: standard SSD
   * *   **cloud_essd**: ESSD
   * *   **cloud_auto**: Premium ESSD
   * 
   * @example
   * cloud_auto
   */
  deviceCategory?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  deviceSize?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   **system**: system disk.
   * *   **data**: data disk.
   * 
   * @example
   * data
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the disk was released. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-03-26T03:33:56Z
   */
  releaseTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      deviceCategory: 'DeviceCategory',
      deviceSize: 'DeviceSize',
      deviceType: 'DeviceType',
      releaseTime: 'ReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      deviceCategory: 'string',
      deviceSize: 'string',
      deviceType: 'string',
      releaseTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

