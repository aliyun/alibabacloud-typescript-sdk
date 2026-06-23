// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpnGatewayDiagnoseResultRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the client token. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The diagnostic ID.
   * 
   * The diagnostic ID is returned when you call the [DiagnoseVpnGateway](https://help.aliyun.com/document_detail/469751.html) operation.
   * 
   * @example
   * vpndgn-uf6kuxbe3iv028k3s****
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The region ID of the VPN gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The VPN gateway instance ID.
   * 
   * @example
   * vpn-uf6fzwp0ck3frwtbk****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diagnoseId: 'DiagnoseId',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diagnoseId: 'string',
      regionId: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

