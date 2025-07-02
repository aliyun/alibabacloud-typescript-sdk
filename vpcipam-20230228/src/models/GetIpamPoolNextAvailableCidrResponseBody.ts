// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpamPoolNextAvailableCidrResponseBody extends $dara.Model {
  /**
   * @remarks
   * Available CIDR.
   * 
   * @example
   * 172.68.0.0/26
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29FC6758-9B7C-5CC7-8CBF-4DD846FE7D82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

