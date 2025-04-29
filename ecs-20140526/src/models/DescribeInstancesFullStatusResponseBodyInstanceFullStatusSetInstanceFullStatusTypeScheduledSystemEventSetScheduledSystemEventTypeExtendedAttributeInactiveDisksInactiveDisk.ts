// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-27T13:53:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: Enterprise SSD (ESSD)
   * *   local_ssd_pro: I/O-intensive local disk
   * *   local_hdd_pro: throughput-intensive local disk
   * *   ephemeral: retired local disk
   * *   ephemeral_ssd: retired local SSD
   * 
   * @example
   * cloud_ssd
   */
  deviceCategory?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  deviceSize?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system
   * *   data
   * 
   * @example
   * system
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the disk was released. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-07-27T13:53:25Z
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

