// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityProxyResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 136481150091****
   */
  memberUid?: number;
  /**
   * @remarks
   * The NAT gateway ID.
   * 
   * @example
   * ngw-uf6y16l23fm8hq0****
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'number',
      natGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

