// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpnCertificateAssociationsResponseBodyVpnCertificateRelations extends $dara.Model {
  /**
   * @remarks
   * The time when the association was created.
   * 
   * The time is displayed in UTC in the YYYY-MM-DDThh:mm:ssZ format.
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
   * The certificate type.
   * 
   * - **Encryption**: encryption certificate.
   * 
   * - **Signature**: signing certificate.
   * 
   * @example
   * Signature
   */
  certificateType?: string;
  /**
   * @remarks
   * The region ID of the VPN gateway.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The VPN gateway instance ID.
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

export class ListVpnCertificateAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * 
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * caeba0bbb2be****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 197AF2BD-547F-470C-B29A-8400400233EB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of associations.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of associations.
   */
  vpnCertificateRelations?: ListVpnCertificateAssociationsResponseBodyVpnCertificateRelations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnCertificateRelations: 'VpnCertificateRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vpnCertificateRelations: { 'type': 'array', 'itemType': ListVpnCertificateAssociationsResponseBodyVpnCertificateRelations },
    };
  }

  validate() {
    if(Array.isArray(this.vpnCertificateRelations)) {
      $dara.Model.validateArray(this.vpnCertificateRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

