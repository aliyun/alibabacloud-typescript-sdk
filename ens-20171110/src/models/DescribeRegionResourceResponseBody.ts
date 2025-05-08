// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionResourceResponseBodyData } from "./DescribeRegionResourceResponseBodyData";
import { DescribeRegionResourceResponseBodyPager } from "./DescribeRegionResourceResponseBodyPager";


export class DescribeRegionResourceResponseBody extends $dara.Model {
  data?: DescribeRegionResourceResponseBodyData[];
  desc?: string;
  msg?: string;
  pager?: DescribeRegionResourceResponseBodyPager;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      desc: 'Desc',
      msg: 'Msg',
      pager: 'Pager',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRegionResourceResponseBodyData },
      desc: 'string',
      msg: 'string',
      pager: DescribeRegionResourceResponseBodyPager,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pager && typeof (this.pager as any).validate === 'function') {
      (this.pager as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

