// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCensResponseBodyCensCen } from "./DescribeCensResponseBodyCensCen";


export class DescribeCensResponseBodyCens extends $dara.Model {
  cen?: DescribeCensResponseBodyCensCen[];
  static names(): { [key: string]: string } {
    return {
      cen: 'Cen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cen: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensCen },
    };
  }

  validate() {
    if(Array.isArray(this.cen)) {
      $dara.Model.validateArray(this.cen);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

