// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value.
   * 
   * @example
   * 52119553
   */
  bps?: number;
  /**
   * @remarks
   * The name of the ISP.
   * 
   * @example
   * unicom
   */
  ispName?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * Liaoning
   */
  locationName?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ispName: 'IspName',
      locationName: 'LocationName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ispName: 'string',
      locationName: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList extends $dara.Model {
  bpsDataModel?: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel[];
  static names(): { [key: string]: string } {
    return {
      bpsDataModel: 'BpsDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataModel: { 'type': 'array', 'itemType': DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.bpsDataModel)) {
      $dara.Model.validateArray(this.bpsDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of bandwidth values by ISP and region.
   */
  bpsDataList?: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The point in time.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataList: 'BpsDataList',
      domainName: 'DomainName',
      requestId: 'RequestId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataList: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList,
      domainName: 'string',
      requestId: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    if(this.bpsDataList && typeof (this.bpsDataList as any).validate === 'function') {
      (this.bpsDataList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

