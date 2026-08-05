// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo extends $dara.Model {
  PV?: string;
  timeStamp?: string;
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
   * The time interval for each record. Unit: seconds. The value is fixed at 3600.
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
   * The end time. The format is *yyyy-MM-dd*T*HH:mm:ssZ* (UTC).
   * 
   * @example
   * 2018-03-20T16:00:00Z
   */
  endTime?: string;
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
   * The start time. The format is *yyyy-MM-dd*T*HH:mm:ssZ* (UTC).
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

