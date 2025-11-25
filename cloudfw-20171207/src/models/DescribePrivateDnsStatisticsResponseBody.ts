// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsStatisticsResponseBodyPrivateDnsRegionList extends $dara.Model {
  /**
   * @example
   * 10
   */
  domainNameCount?: number;
  /**
   * @example
   * 1
   */
  newDomainNameCount?: number;
  /**
   * @example
   * 1
   */
  privateDnsCount?: number;
  /**
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
   * @example
   * 12
   */
  abnormalPrivateDnsCount?: number;
  /**
   * @example
   * 6
   */
  createdPrivateDnsCount?: number;
  /**
   * @example
   * 5
   */
  domainNameTotalCount?: number;
  /**
   * @example
   * 2
   */
  newDomainNameTotalCount?: number;
  /**
   * @example
   * 21
   */
  normalPrivateDnsCount?: number;
  privateDnsRegionList?: DescribePrivateDnsStatisticsResponseBodyPrivateDnsRegionList[];
  /**
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

