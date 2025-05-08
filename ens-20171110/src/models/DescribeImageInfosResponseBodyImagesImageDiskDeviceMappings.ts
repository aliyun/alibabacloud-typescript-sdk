// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageInfosResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping } from "./DescribeImageInfosResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping";


export class DescribeImageInfosResponseBodyImagesImageDiskDeviceMappings extends $dara.Model {
  diskDeviceMapping?: DescribeImageInfosResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImageInfosResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping },
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMapping)) {
      $dara.Model.validateArray(this.diskDeviceMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

