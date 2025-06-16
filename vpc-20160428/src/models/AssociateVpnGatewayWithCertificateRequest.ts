// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateVpnGatewayWithCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 6bfe4218-ea1d****
   */
  certificateId?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **Encryption**
   * *   **Signature**
   * 
   * This parameter is required.
   * 
   * @example
   * Signature
   */
  certificateType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 0c593ea1-3bea****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request passes the dry run, a request ID is returned. Otherwise, an error message is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the VPN gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * > You can associate only VPN gateways of the SM type with certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateType: 'CertificateType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
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

