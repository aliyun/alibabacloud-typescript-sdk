// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnIpaDomainCidrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin IPv4 and IPv6 CIDR blocks.
   * 
   * @example
   * ["1.1.1.0/24","2.2.2.0/24","1111:2222:3333:4444:5555:0:0:0/80"]
   */
  cidr?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidr)) {
      $dara.Model.validateArray(this.cidr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

