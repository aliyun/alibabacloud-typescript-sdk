// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpnCertificateAssociationsResponseBodyVpnCertificateRelations extends $dara.Model {
  /**
   * @remarks
   * The time when the Anycast EIP was associated.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-29T09:30:29Z
   */
  associationTime?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 6bfe4218-ea1d****
   */
  certificateId?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * *   **Encryption**
   * *   **Signature**
   * 
   * @example
   * Signature
   */
  certificateType?: string;
  /**
   * @remarks
   * The ID of the region where the VPN gateway is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1usbiorilk51760****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      associationTime: 'AssociationTime',
      certificateId: 'CertificateId',
      certificateType: 'CertificateType',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationTime: 'string',
      certificateId: 'string',
      certificateType: 'string',
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

