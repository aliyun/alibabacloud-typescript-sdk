// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos } from "./ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos";


export class ListSoftwaresResponseBodyAdditionalPackages extends $dara.Model {
  additionalPackageInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos[];
  static names(): { [key: string]: string } {
    return {
      additionalPackageInfos: 'AdditionalPackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackageInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos },
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

