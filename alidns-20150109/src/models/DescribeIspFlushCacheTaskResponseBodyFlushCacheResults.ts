// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes } from "./DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes";


export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResults extends $dara.Model {
  dnsNodes?: DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes[];
  province?: string;
  static names(): { [key: string]: string } {
    return {
      dnsNodes: 'DnsNodes',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsNodes: { 'type': 'array', 'itemType': DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes },
      province: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsNodes)) {
      $dara.Model.validateArray(this.dnsNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

