// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsStatisticsResponseBodyPrivateDnsRegionList extends $dara.Model {
  /**
   * @remarks
   * The number of configured domain names for private DNS in the region.
   * 
   * @example
   * 10
   */
  domainNameCount?: number;
  /**
   * @remarks
   * The number of configured domain names that were created in the region within the specified time range.
   * 
   * @example
   * 1
   */
  newDomainNameCount?: number;
  /**
   * @remarks
   * The number of private DNS instances in the region.
   * 
   * @example
   * 1
   */
  privateDnsCount?: number;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      domainNameCount: 'DomainNameCount',
      newDomainNameCount: 'NewDomainNameCount',
      privateDnsCount: 'PrivateDnsCount',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNameCount: 'number',
      newDomainNameCount: 'number',
      privateDnsCount: 'number',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrivateDnsStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of private DNS instances in an abnormal state.
   * 
   * @example
   * 12
   */
  abnormalPrivateDnsCount?: number;
  /**
   * @remarks
   * The number of created private DNS instances.
   * 
   * @example
   * 6
   */
  createdPrivateDnsCount?: number;
  /**
   * @remarks
   * The total number of configured domain names.
   * 
   * @example
   * 5
   */
  domainNameTotalCount?: number;
  /**
   * @remarks
   * The number of configured domain names that were created within the specified time range.
   * 
   * @example
   * 2
   */
  newDomainNameTotalCount?: number;
  /**
   * @remarks
   * The number of private DNS instances in a normal state.
   * 
   * @example
   * 21
   */
  normalPrivateDnsCount?: number;
  /**
   * @remarks
   * A list of DNS regions.
   */
  privateDnsRegionList?: DescribePrivateDnsStatisticsResponseBodyPrivateDnsRegionList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5716ED52-1B82-5DE1-8695-EFEC453D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalPrivateDnsCount: 'AbnormalPrivateDnsCount',
      createdPrivateDnsCount: 'CreatedPrivateDnsCount',
      domainNameTotalCount: 'DomainNameTotalCount',
      newDomainNameTotalCount: 'NewDomainNameTotalCount',
      normalPrivateDnsCount: 'NormalPrivateDnsCount',
      privateDnsRegionList: 'PrivateDnsRegionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalPrivateDnsCount: 'number',
      createdPrivateDnsCount: 'number',
      domainNameTotalCount: 'number',
      newDomainNameTotalCount: 'number',
      normalPrivateDnsCount: 'number',
      privateDnsRegionList: { 'type': 'array', 'itemType': DescribePrivateDnsStatisticsResponseBodyPrivateDnsRegionList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privateDnsRegionList)) {
      $dara.Model.validateArray(this.privateDnsRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

