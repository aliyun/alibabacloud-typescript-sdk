// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule } from "./DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule";


export class DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

