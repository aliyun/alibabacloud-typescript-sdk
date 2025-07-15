// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo extends $dara.Model {
  /**
   * @remarks
   * The number of PVs.
   * 
   * @example
   * 3036
   */
  PV?: string;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2018-03-19T16:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The number of UVs.
   * 
   * @example
   * 2
   */
  UV?: string;
  static names(): { [key: string]: string } {
    return {
      PV: 'PV',
      timeStamp: 'TimeStamp',
      UV: 'UV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PV: 'string',
      timeStamp: 'string',
      UV: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfos extends $dara.Model {
  pvUvDataInfo?: DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo[];
  static names(): { [key: string]: string } {
    return {
      pvUvDataInfo: 'PvUvDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvUvDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo },
    };
  }

  validate() {
    if(Array.isArray(this.pvUvDataInfo)) {
      $dara.Model.validateArray(this.pvUvDataInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPvUvDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the entries returned. Unit: seconds. Default value: 3600.
   * 
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which the data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2018-03-20T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data of PVs and UVs.
   */
  pvUvDataInfos?: DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9D3257A-1B7C-414C-90C1-8D07AC47BCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which the data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2018-03-17T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pvUvDataInfos: 'PvUvDataInfos',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pvUvDataInfos: DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfos,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.pvUvDataInfos && typeof (this.pvUvDataInfos as any).validate === 'function') {
      (this.pvUvDataInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

