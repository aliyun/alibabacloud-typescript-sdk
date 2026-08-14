// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpnCertificateAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of certificate IDs.
   * 
   * You can query the associations between up to 20 SSL certificates and VPN gateway instances at a time.
   * 
   * @example
   * 6bfe4218-ea1d****
   */
  certificateId?: string[];
  /**
   * @remarks
   * The certificate type. Valid values:
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
   * The number of entries per page. Valid values: **1** to **20**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - If this is the first query or no subsequent query exists, leave this parameter empty.
   * 
   * - If a subsequent query exists, set this parameter to the **NextToken** value returned by the previous API call.
   * 
   * @example
   * caeba0bbb2be0****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the VPN gateway.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of VPN gateway instance IDs.
   * 
   * You can query the associations between up to 20 VPN gateway instances and SSL certificates at a time.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm****
   */
  vpnGatewayId?: string[];
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateType: 'CertificateType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: { 'type': 'array', 'itemType': 'string' },
      certificateType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      vpnGatewayId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.certificateId)) {
      $dara.Model.validateArray(this.certificateId);
    }
    if(Array.isArray(this.vpnGatewayId)) {
      $dara.Model.validateArray(this.vpnGatewayId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

