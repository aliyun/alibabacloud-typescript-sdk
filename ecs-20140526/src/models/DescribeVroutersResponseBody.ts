// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVRoutersResponseBodyVRouters } from "./DescribeVroutersResponseBodyVrouters";


export class DescribeVRoutersResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  VRouters?: DescribeVRoutersResponseBodyVRouters;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      VRouters: 'VRouters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      VRouters: DescribeVRoutersResponseBodyVRouters,
    };
  }

  validate() {
    if(this.VRouters && typeof (this.VRouters as any).validate === 'function') {
      (this.VRouters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

