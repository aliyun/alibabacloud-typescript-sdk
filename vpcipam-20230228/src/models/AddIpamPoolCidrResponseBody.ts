// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpamPoolCidrResponseBody extends $dara.Model {
  cidr?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 558BC336-8B88-53B0-B4AD-980EE900AB01
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
      cidr: 'string',
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

