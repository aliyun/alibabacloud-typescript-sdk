// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping } from "./DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping";


export class DescribeImageFromFamilyResponseBodyImageDiskDeviceMappings extends $dara.Model {
  diskDeviceMapping?: DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping },
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

