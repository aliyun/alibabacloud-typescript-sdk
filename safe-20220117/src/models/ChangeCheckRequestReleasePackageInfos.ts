// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckRequestReleasePackageInfos extends $dara.Model {
  productCode?: string;
  releasePackage?: string[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      releasePackage: 'ReleasePackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      releasePackage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.releasePackage)) {
      $dara.Model.validateArray(this.releasePackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

