// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnBlackholeCountResponseBody extends $dara.Model {
  remainCount?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      remainCount: 'RemainCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainCount: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

