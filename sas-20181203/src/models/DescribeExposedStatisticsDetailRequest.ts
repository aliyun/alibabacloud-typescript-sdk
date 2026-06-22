// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedStatisticsDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * {}
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The public IP address that is exposed on the Internet for the asset to query.
   * 
   * @example
   * 116.12.XX.XX
   */
  exposureIp?: string;
  /**
   * @remarks
   * The instance ID of the asset to query.
   * 
   * @example
   * s-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > Set PageSize to a non-empty value.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * > Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The type of statistics to query. Valid values:
   * - **exposureType**: gateway assets exposed on the Internet.
   * - **exposurePort**: ports exposed on the Internet.
   * - **exposureComponent**: system components exposed on the Internet.
   * - **exposureIp**: IP addresses exposed on the Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * exposureType
   */
  statisticsType?: string;
  /**
   * @remarks
   * The Asset Type of the gateway to query. This parameter takes effect only when **StatisticsType** is set to **exposureType**. Valid values:
   * - **SLB**: public IP address of a load balancing SLB instance.
   * - **DNAT**: NAT gateway that uses the DNAT feature to connect to the Internet.
   * 
   * @example
   * SLB
   */
  statisticsTypeGatewayType?: string;
  /**
   * @remarks
   * The instance ID of the gateway to query. This parameter takes effect only when **StatisticsType** is set to **exposureType**.
   * 
   * @example
   * lb-2ze4rso39h4nczcqs****
   */
  statisticsTypeInstanceValue?: string;
  /**
   * @remarks
   * The UUID of the server to query.
   * 
   * @example
   * c9107c04-942f-40c1-981a-f1c1***
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      exposureIp: 'ExposureIp',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      statisticsType: 'StatisticsType',
      statisticsTypeGatewayType: 'StatisticsTypeGatewayType',
      statisticsTypeInstanceValue: 'StatisticsTypeInstanceValue',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      exposureIp: 'string',
      instanceId: 'string',
      pageSize: 'number',
      resourceDirectoryAccountId: 'number',
      statisticsType: 'string',
      statisticsTypeGatewayType: 'string',
      statisticsTypeInstanceValue: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

