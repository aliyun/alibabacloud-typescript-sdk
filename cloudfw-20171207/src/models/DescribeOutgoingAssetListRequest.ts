// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingAssetListRequest extends $dara.Model {
  /**
   * @remarks
   * The region to which the asset belongs.
   * 
   * @example
   * cn-beijing
   */
  assetsRegion?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1736438400
   */
  endTime?: string;
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
   * Specifies whether to query outbound connections over the NAT private network.
   * 
   * @example
   * NatPrivate
   */
  IPType?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-bp123456g******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.200.33.XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.116.70.XXX
   */
  publicIP?: string;
  /**
   * @remarks
   * The type of the public IP address of the asset.
   * 
   * @example
   * NatEIP
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
   * The sort field.
   * 
   * @example
   * InBytes
   */
  sort?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1743647114
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetsRegion: 'AssetsRegion',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      groupName: 'GroupName',
      IPType: 'IPType',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      order: 'Order',
      pageSize: 'PageSize',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      resourceType: 'ResourceType',
      securityRisk: 'SecurityRisk',
      sort: 'Sort',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsRegion: 'string',
      currentPage: 'string',
      endTime: 'string',
      groupName: 'string',
      IPType: 'string',
      lang: 'string',
      natGatewayId: 'string',
      natGatewayName: 'string',
      order: 'string',
      pageSize: 'string',
      privateIP: 'string',
      publicIP: 'string',
      resourceType: 'string',
      securityRisk: 'string',
      sort: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

