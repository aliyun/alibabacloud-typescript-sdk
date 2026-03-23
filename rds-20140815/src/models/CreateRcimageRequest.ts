// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCImageRequest extends $dara.Model {
  imageName?: string;
  instanceId?: string;
  regionId?: string;
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

