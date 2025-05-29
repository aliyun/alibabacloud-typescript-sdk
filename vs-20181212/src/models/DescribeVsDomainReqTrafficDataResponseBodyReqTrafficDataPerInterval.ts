// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule } from "./DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule";


export class DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule },
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

