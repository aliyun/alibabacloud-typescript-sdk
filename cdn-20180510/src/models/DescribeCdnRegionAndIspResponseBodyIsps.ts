// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnRegionAndIspResponseBodyIspsIsp } from "./DescribeCdnRegionAndIspResponseBodyIspsIsp";


export class DescribeCdnRegionAndIspResponseBodyIsps extends $dara.Model {
  isp?: DescribeCdnRegionAndIspResponseBodyIspsIsp[];
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: { 'type': 'array', 'itemType': DescribeCdnRegionAndIspResponseBodyIspsIsp },
    };
  }

  validate() {
    if(Array.isArray(this.isp)) {
      $dara.Model.validateArray(this.isp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

