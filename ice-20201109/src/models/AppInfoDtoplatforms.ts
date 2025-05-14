// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppInfoDTOPlatforms extends $dara.Model {
  itemId?: string;
  licenseItemIds?: string[];
  pkgName?: string;
  pkgSignature?: string;
  platformType?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      licenseItemIds: 'LicenseItemIds',
      pkgName: 'PkgName',
      pkgSignature: 'PkgSignature',
      platformType: 'PlatformType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      licenseItemIds: { 'type': 'array', 'itemType': 'string' },
      pkgName: 'string',
      pkgSignature: 'string',
      platformType: 'number',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.licenseItemIds)) {
      $dara.Model.validateArray(this.licenseItemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

