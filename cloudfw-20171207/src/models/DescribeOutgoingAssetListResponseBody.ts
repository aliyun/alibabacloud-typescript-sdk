// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingAssetListResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * i-8vbcmllue4d94nto****
   */
  assetInstanceId?: string;
  /**
   * @remarks
   * The name of the asset instance.
   * 
   * @example
   * test
   */
  assetInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  assetsRegion?: string;
  /**
   * @remarks
   * The follow status.
   * 
   * @example
   * subscribe
   */
  groupName?: string;
  /**
   * @remarks
   * The inbound traffic, which is the response traffic. Unit: bytes.
   * 
   * @example
   * 244438.0
   */
  inBytes?: number;
  /**
   * @remarks
   * The number of IPS hits.
   * 
   * @example
   * 12
   */
  ipsHitCnt?: number;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-bp1utx6wj4x9qu9tl****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT Gateway.
   * 
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The outbound traffic, which is the request traffic. Unit: bytes.
   * 
   * @example
   * 100
   */
  outBytes?: number;
  /**
   * @remarks
   * The number of outbound domains.
   * 
   * @example
   * 10
   */
  outgoingDomainCnt?: number;
  /**
   * @remarks
   * The number of outbound destination IP addresses.
   * 
   * @example
   * 12
   */
  outgoingDstIPCnt?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.21.242XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The list of private IP addresses.
   */
  privateIPList?: string[];
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.96.181.XXX
   */
  publicIP?: string;
  /**
   * @remarks
   * The type of the public IP address of the asset.
   * 
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The security risk.
   * 
   * @example
   * risk
   */
  securityRisk?: string;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 2
   */
  sessionCount?: number;
  /**
   * @remarks
   * The total traffic.
   * 
   * @example
   * 12498767
   */
  totalBytes?: number;
  static names(): { [key: string]: string } {
    return {
      assetInstanceId: 'AssetInstanceId',
      assetInstanceName: 'AssetInstanceName',
      assetsRegion: 'AssetsRegion',
      groupName: 'GroupName',
      inBytes: 'InBytes',
      ipsHitCnt: 'IpsHitCnt',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      outBytes: 'OutBytes',
      outgoingDomainCnt: 'OutgoingDomainCnt',
      outgoingDstIPCnt: 'OutgoingDstIPCnt',
      privateIP: 'PrivateIP',
      privateIPList: 'PrivateIPList',
      publicIP: 'PublicIP',
      resourceType: 'ResourceType',
      securityRisk: 'SecurityRisk',
      sessionCount: 'SessionCount',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetInstanceId: 'string',
      assetInstanceName: 'string',
      assetsRegion: 'string',
      groupName: 'string',
      inBytes: 'number',
      ipsHitCnt: 'number',
      natGatewayId: 'string',
      natGatewayName: 'string',
      outBytes: 'number',
      outgoingDomainCnt: 'number',
      outgoingDstIPCnt: 'number',
      privateIP: 'string',
      privateIPList: { 'type': 'array', 'itemType': 'string' },
      publicIP: 'string',
      resourceType: 'string',
      securityRisk: 'string',
      sessionCount: 'number',
      totalBytes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.privateIPList)) {
      $dara.Model.validateArray(this.privateIPList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingAssetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of assets.
   */
  assetList?: DescribeOutgoingAssetListResponseBodyAssetList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A515672-FAAE-584F-B51C-B2586E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': DescribeOutgoingAssetListResponseBodyAssetList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

