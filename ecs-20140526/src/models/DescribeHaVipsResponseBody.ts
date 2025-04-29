// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHaVipsResponseBodyHaVips } from "./DescribeHaVipsResponseBodyHaVips";


export class DescribeHaVipsResponseBody extends $dara.Model {
  haVips?: DescribeHaVipsResponseBodyHaVips;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      haVips: 'HaVips',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVips: DescribeHaVipsResponseBodyHaVips,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.haVips && typeof (this.haVips as any).validate === 'function') {
      (this.haVips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

