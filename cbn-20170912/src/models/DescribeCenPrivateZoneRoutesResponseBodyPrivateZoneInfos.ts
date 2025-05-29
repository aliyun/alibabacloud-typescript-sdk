// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo } from "./DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo";


export class DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos extends $dara.Model {
  privateZoneInfo?: DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      privateZoneInfo: 'PrivateZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateZoneInfo: { 'type': 'array', 'itemType': DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo },
    };
  }

  validate() {
    if(Array.isArray(this.privateZoneInfo)) {
      $dara.Model.validateArray(this.privateZoneInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

