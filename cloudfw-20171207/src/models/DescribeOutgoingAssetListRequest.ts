// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingAssetListRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  assetsRegion?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1736438400
   */
  endTime?: string;
  /**
   * @example
   * subscribe
   */
  groupName?: string;
  /**
   * @example
   * NatPrivate
   */
  IPType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * ngw-bp123456g******
   */
  natGatewayId?: string;
  /**
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 10.200.33.XXX
   */
  privateIP?: string;
  /**
   * @example
   * 47.116.70.XXX
   */
  publicIP?: string;
  /**
   * @example
   * NatEIP
   */
  resourceType?: string;
  /**
   * @example
   * risk
   */
  securityRisk?: string;
  /**
   * @example
   * InBytes
   */
  sort?: string;
  /**
   * @remarks
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

