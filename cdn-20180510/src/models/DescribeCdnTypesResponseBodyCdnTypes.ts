// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnTypesResponseBodyCdnTypesCdnType } from "./DescribeCdnTypesResponseBodyCdnTypesCdnType";


export class DescribeCdnTypesResponseBodyCdnTypes extends $dara.Model {
  cdnType?: DescribeCdnTypesResponseBodyCdnTypesCdnType[];
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: { 'type': 'array', 'itemType': DescribeCdnTypesResponseBodyCdnTypesCdnType },
    };
  }

  validate() {
    if(Array.isArray(this.cdnType)) {
      $dara.Model.validateArray(this.cdnType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

