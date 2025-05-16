// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos } from "./ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos";


export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs extends $dara.Model {
  supportOsInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos[];
  static names(): { [key: string]: string } {
    return {
      supportOsInfos: 'SupportOsInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportOsInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos },
    };
  }

  validate() {
    if(Array.isArray(this.supportOsInfos)) {
      $dara.Model.validateArray(this.supportOsInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

