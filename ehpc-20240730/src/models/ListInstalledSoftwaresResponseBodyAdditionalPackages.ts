// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos } from "./ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos";


export class ListInstalledSoftwaresResponseBodyAdditionalPackages extends $dara.Model {
  additionalPackageInfos?: ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos[];
  static names(): { [key: string]: string } {
    return {
      additionalPackageInfos: 'AdditionalPackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackageInfos: { 'type': 'array', 'itemType': ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos },
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackageInfos)) {
      $dara.Model.validateArray(this.additionalPackageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

