// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeL7UsKeepaliveResponseBodyRsKeepalive } from "./DescribeL7usKeepaliveResponseBodyRsKeepalive";


export class DescribeL7UsKeepaliveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39499F01-19D9-4EA4-A0E9-C6014BA5CDBE
   */
  requestId?: string;
  /**
   * @remarks
   * The value of the Back-to-origin Persistent Connections parameter.
   */
  rsKeepalive?: DescribeL7UsKeepaliveResponseBodyRsKeepalive;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rsKeepalive: 'RsKeepalive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rsKeepalive: DescribeL7UsKeepaliveResponseBodyRsKeepalive,
    };
  }

  validate() {
    if(this.rsKeepalive && typeof (this.rsKeepalive as any).validate === 'function') {
      (this.rsKeepalive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

