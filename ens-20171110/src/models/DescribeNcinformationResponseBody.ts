// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNCInformationResponseBodyData } from "./DescribeNcinformationResponseBodyData";
import { DescribeNCInformationResponseBodyPager } from "./DescribeNcinformationResponseBodyPager";


export class DescribeNCInformationResponseBody extends $dara.Model {
  currentPage?: number;
  data?: DescribeNCInformationResponseBodyData[];
  desc?: string;
  msg?: string;
  pager?: DescribeNCInformationResponseBodyPager;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      desc: 'Desc',
      msg: 'Msg',
      pager: 'Pager',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': DescribeNCInformationResponseBodyData },
      desc: 'string',
      msg: 'string',
      pager: DescribeNCInformationResponseBodyPager,
      requestId: 'string',
      totalCount: 'number',
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

