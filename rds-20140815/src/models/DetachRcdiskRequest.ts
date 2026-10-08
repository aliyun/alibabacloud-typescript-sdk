// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachRCDiskRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * none
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The ID of the cloud disk to be detached.
   * 
   * This parameter is required.
   * 
   * @example
   * rcd-f8zh55g5gbk1byjr****
   */
  diskId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteWithInstance: 'DeleteWithInstance',
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWithInstance: 'boolean',
      diskId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

