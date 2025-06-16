// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateVpcCidrBlockResponseBody extends $dara.Model {
  cidrBlock?: string;
  ipVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1221A1F-2ACD-4592-8F27-474E02883159
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ipVersion: 'IpVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ipVersion: 'string',
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

