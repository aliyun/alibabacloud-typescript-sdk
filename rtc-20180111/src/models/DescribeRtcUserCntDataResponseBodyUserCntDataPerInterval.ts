// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule } from "./DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule";


export class DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval extends $dara.Model {
  userCntModule?: DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule[];
  static names(): { [key: string]: string } {
    return {
      userCntModule: 'UserCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCntModule: { 'type': 'array', 'itemType': DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule },
    };
  }

  validate() {
    if(Array.isArray(this.userCntModule)) {
      $dara.Model.validateArray(this.userCntModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

