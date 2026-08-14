// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeL7UsKeepaliveResponseBodyRsKeepalive extends $dara.Model {
  dsKeepaliveTimeout?: number;
  enabled?: boolean;
  keepaliveRequests?: number;
  keepaliveTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      dsKeepaliveTimeout: 'DsKeepaliveTimeout',
      enabled: 'Enabled',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsKeepaliveTimeout: 'number',
      enabled: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7UsKeepaliveResponseBody extends $dara.Model {
  requestId?: string;
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

