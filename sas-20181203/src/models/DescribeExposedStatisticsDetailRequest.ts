// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedStatisticsDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The search condition for components.
   * 
   * @example
   * {}
   */
  criteria?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the ID.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The type of the exposed asset. Valid values:
   * 
   * *   **exposureType**: gateway assets
   * *   **exposurePort**: ports
   * *   **exposureComponent**: system components
   * *   **exposureIp**: IP addresses
   * 
   * This parameter is required.
   * 
   * @example
   * exposureType
   */
  statisticsType?: string;
  /**
   * @remarks
   * The type of the gateway asset. This parameter is required when the **StatisticsType** parameter is set to **exposureType**. Valid values:
   * 
   * *   **SLB**: the public IP address of a Server Load Balancer (SLB) instance
   * *   **DNAT**: the NAT gateway that connects to the Internet by using the DNAT feature
   * 
   * @example
   * SLB
   */
  statisticsTypeGatewayType?: string;
  /**
   * @remarks
   * The ID of the gateway asset. This parameter is required when the **StatisticsType** parameter is set to **exposureType**.
   * 
   * @example
   * lb-2ze4rso39h4nczcqs****
   */
  statisticsTypeInstanceValue?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * c9107c04-942f-40c1-981a-f1c1***
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
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

