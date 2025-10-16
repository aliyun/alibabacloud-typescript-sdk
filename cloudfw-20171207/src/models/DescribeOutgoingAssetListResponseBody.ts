// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingAssetListResponseBodyAssetList extends $dara.Model {
  /**
   * @example
   * i-8vbcmllue4d94nto****
   */
  assetInstanceId?: string;
  /**
   * @example
   * test
   */
  assetInstanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  assetsRegion?: string;
  /**
   * @example
   * subscribe
   */
  groupName?: string;
  /**
   * @example
   * 244438.0
   */
  inBytes?: number;
  /**
   * @example
   * 12
   */
  ipsHitCnt?: number;
  /**
   * @example
   * ngw-bp1utx6wj4x9qu9tl****
   */
  natGatewayId?: string;
  /**
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @example
   * 100
   */
  outBytes?: number;
  /**
   * @example
   * 10
   */
  outgoingDomainCnt?: number;
  /**
   * @example
   * 12
   */
  outgoingDstIPCnt?: number;
  /**
   * @example
   * 10.21.242XXX
   */
  privateIP?: string;
  privateIPList?: string[];
  /**
   * @example
   * 47.96.181.XXX
   */
  publicIP?: string;
  /**
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @example
   * risk
   */
  securityRisk?: string;
  /**
   * @example
   * 2
   */
  sessionCount?: number;
  /**
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
  assetList?: DescribeOutgoingAssetListResponseBodyAssetList[];
  /**
   * @example
   * 7A515672-FAAE-584F-B51C-B2586E****
   */
  requestId?: string;
  /**
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

