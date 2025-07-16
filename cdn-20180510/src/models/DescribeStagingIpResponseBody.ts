// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStagingIpResponseBodyIPV4s extends $dara.Model {
  IPV4?: string[];
  static names(): { [key: string]: string } {
    return {
      IPV4: 'IPV4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPV4)) {
      $dara.Model.validateArray(this.IPV4);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStagingIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * IPv4 addresses.
   */
  IPV4s?: DescribeStagingIpResponseBodyIPV4s;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1B9E0E83-24AC-49F4-9EE0-BF5EB03E8381
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      IPV4s: 'IPV4s',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4s: DescribeStagingIpResponseBodyIPV4s,
      requestId: 'string',
    };
  }

  validate() {
    if(this.IPV4s && typeof (this.IPV4s as any).validate === 'function') {
      (this.IPV4s as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

