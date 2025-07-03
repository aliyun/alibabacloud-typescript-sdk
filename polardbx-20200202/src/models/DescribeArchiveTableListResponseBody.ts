// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeArchiveTableListResponseBodyData } from "./DescribeArchiveTableListResponseBodyData";


export class DescribeArchiveTableListResponseBody extends $dara.Model {
  data?: DescribeArchiveTableListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeArchiveTableListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

