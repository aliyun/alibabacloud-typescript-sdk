// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterWhiteListResponseBodyGroupItems extends $dara.Model {
  whiteIp?: string[];
  static names(): { [key: string]: string } {
    return {
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIp)) {
      $dara.Model.validateArray(this.whiteIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterWhiteListResponseBody extends $dara.Model {
  groupItems?: DescribeClusterWhiteListResponseBodyGroupItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupItems: 'GroupItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupItems: DescribeClusterWhiteListResponseBodyGroupItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groupItems && typeof (this.groupItems as any).validate === 'function') {
      (this.groupItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

