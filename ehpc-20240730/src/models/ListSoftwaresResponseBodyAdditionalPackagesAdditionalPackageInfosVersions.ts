// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos } from "./ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos";


export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions extends $dara.Model {
  versionInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos[];
  static names(): { [key: string]: string } {
    return {
      versionInfos: 'VersionInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos },
    };
  }

  validate() {
    if(Array.isArray(this.versionInfos)) {
      $dara.Model.validateArray(this.versionInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

