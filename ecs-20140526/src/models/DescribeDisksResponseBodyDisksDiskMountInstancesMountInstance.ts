// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was attached. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-05T2340:00Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * The mount point of the disk.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * The ID of the instance to which the disk is attached.
   * 
   * @example
   * i-bp1j4i2jdf3owlhe****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      device: 'Device',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      device: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

