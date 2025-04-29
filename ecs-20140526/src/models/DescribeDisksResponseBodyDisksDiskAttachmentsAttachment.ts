// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksResponseBodyDisksDiskAttachmentsAttachment extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was attached. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-07T06:08:56Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * The device name of the disk.
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
   * i-bp67acfmxazb4q****
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

