// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedStatisticsDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponseBodyStatisticsDetails extends $dara.Model {
  /**
   * @remarks
   * The total number of system vulnerabilities that are detected on your server and are exposed on the Internet.
   * 
   * @example
   * 0
   */
  exposedCount?: number;
  /**
   * @remarks
   * The system component that is exposed on the Internet.
   * 
   * @example
   * tomcat
   */
  exposureComponent?: string;
  /**
   * @remarks
   * The public IP address that is exposed on the Internet.
   * 
   * @example
   * 123.57.XX.XX
   */
  exposureIp?: string;
  /**
   * @remarks
   * The port that is exposed on the Internet.
   * 
   * @example
   * 22
   */
  exposurePort?: string;
  /**
   * @remarks
   * The resource from which the asset is exposed. Valid values:
   * 
   * *   **INTERNET_IP**: the IP address of the Elastic Compute Service (ECS) instance
   * *   **SLB**: the public IP address of the SLB instance
   * *   **EIP**: the elastic IP address (EIP)
   * *   **DNAT**: the NAT gateway that connects to the Internet by using the DNAT feature
   * 
   * @example
   * SLB
   */
  exposureType?: string;
  /**
   * @remarks
   * The ID of the instance to which the resource belongs. The valid values of this parameter vary based on the value of the ExposureType parameter.
   * 
   * *   If the value of the **ExposureType** parameter is **INTERNET_IP**, the value of this parameter is an empty string.
   * *   If the value of the **ExposureType** parameter is **SLB**, the value of this parameter is the ID of the Internet-facing SLB instance.
   * *   If the value of the **ExposureType** parameter is **EIP**, the value of this parameter is the ID of the EIP.
   * *   If the value of the **ExposureType** parameter is **DNAT**, the value of this parameter is the ID of the NAT gateway.
   * 
   * @example
   * lb-2ze4rso39h4nczcqs****
   */
  exposureTypeId?: string;
  /**
   * @remarks
   * The name of the gateway asset that is exposed on the Internet.
   * 
   * @example
   * ngw-bp1vkbju8f3w87c9v****
   */
  exposureTypeInstanceName?: string;
  /**
   * @remarks
   * The listener port that is used to redirect HTTP requests.
   * 
   * @example
   * 80
   */
  forwardPort?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      exposedCount: 'ExposedCount',
      exposureComponent: 'ExposureComponent',
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      exposureType: 'ExposureType',
      exposureTypeId: 'ExposureTypeId',
      exposureTypeInstanceName: 'ExposureTypeInstanceName',
      forwardPort: 'ForwardPort',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedCount: 'number',
      exposureComponent: 'string',
      exposureIp: 'string',
      exposurePort: 'string',
      exposureType: 'string',
      exposureTypeId: 'string',
      exposureTypeInstanceName: 'string',
      forwardPort: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeExposedStatisticsDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7CBAFB3F-1ED7-4A23-986A-6F67F0466BD1
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of the gateway assets, ports, system components, or public IP addresses that are exposed on the Internet and are returned.
   */
  statisticsDetails?: DescribeExposedStatisticsDetailResponseBodyStatisticsDetails[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      statisticsDetails: 'StatisticsDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeExposedStatisticsDetailResponseBodyPageInfo,
      requestId: 'string',
      statisticsDetails: { 'type': 'array', 'itemType': DescribeExposedStatisticsDetailResponseBodyStatisticsDetails },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.statisticsDetails)) {
      $dara.Model.validateArray(this.statisticsDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

