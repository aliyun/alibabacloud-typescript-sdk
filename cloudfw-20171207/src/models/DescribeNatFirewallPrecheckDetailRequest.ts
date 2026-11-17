// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallPrecheckDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The language type of the request and response messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway. Although this parameter is marked as optional in the API definition, it is required when you call this operation. If this parameter is not specified or its value does not start with `ngw-`, the API returns a 400 error (`ErrorParameters`, error code `-360103`).
   * 
   * @example
   * ngw-bp1okz6k7dge****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      natGatewayId: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

