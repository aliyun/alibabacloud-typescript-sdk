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

export class ListVpnCertificateAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If **NextToken** is not empty, the value indicates the token that is used for the next query.
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
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The association information.
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

