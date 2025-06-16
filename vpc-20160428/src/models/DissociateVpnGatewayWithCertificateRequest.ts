// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateVpnGatewayWithCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * >  The certificate ID refers to the ID generated after the SSL certificate is associated with the VPN gateway. It is not the ID of the SSL certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 6bfe4218-ea1d****
   */
  certificateId?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * *   **Encryption**
   * *   **Signature**
   * 
   * This parameter is required.
   * 
   * @example
   * Encryption
   */
  certificateType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e*******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request passes the dry run, the `DryRunOperation` error code is returned. Otherwise, an error message is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
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

