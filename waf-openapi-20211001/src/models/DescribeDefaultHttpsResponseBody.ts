// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDefaultHttpsResponseBodyDefaultHttps } from "./DescribeDefaultHttpsResponseBodyDefaultHttps";


export class DescribeDefaultHttpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default SSL and TLS settings.
   */
  defaultHttps?: DescribeDefaultHttpsResponseBodyDefaultHttps;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultHttps: 'DefaultHttps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultHttps: DescribeDefaultHttpsResponseBodyDefaultHttps,
      requestId: 'string',
    };
  }

  validate() {
    if(this.defaultHttps && typeof (this.defaultHttps as any).validate === 'function') {
      (this.defaultHttps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

