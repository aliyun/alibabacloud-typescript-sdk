// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModificationPriceRequestResourceSpecs extends $dara.Model {
  desktopId?: string;
  rootDiskSizeGib?: number;
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      rootDiskSizeGib: 'number',
      userDiskSizeGib: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

