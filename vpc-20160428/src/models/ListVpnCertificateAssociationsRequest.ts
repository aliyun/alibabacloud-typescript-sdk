// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpnCertificateAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of certificate IDs.
   * 
   * You can query the association between at most 20 SSL certificates and VPN gateways.
   * 
   * @example
   * 6bfe4218-ea1d****
   */
  certificateId?: string[];
  /**
   * @remarks
   * The certificate type. Valid values:
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
   * The number of entries to return on each page. Valid values: **1** to **20**. Default value: **1**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * caeba0bbb2be0****
   */
  nextToken?: string;
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
   * The list of VPN gateway IDs.
   * 
   * You can query the association between at most 20 VPN gateways and SSL certificates.
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

