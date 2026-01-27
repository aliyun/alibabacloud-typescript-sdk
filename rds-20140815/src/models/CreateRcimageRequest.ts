// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCImageRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the custom image.
   * 
   * @example
   * Created_from_rc-vma9w5z699x9********
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the RDS Custom instance.
   * 
   * @example
   * rc-vma9w5z699x93204****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot from which to create the custom image. You can call the DescribeRCSnapshots operation to query the snapshot ID.
   * 
   * @example
   * rcds-c9bjdl79vz5dx********
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageName: 'string',
      instanceId: 'string',
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

