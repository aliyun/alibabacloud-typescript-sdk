// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatFirewallPreCheckRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ngw-uf69hlxv5c817iqrk****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-2zeiljdml8pble168****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      natGatewayId: 'string',
      regionNo: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

