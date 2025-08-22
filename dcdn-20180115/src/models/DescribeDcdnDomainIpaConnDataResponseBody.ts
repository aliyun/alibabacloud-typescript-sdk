// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The number of IPA user connections.
   * 
   * @example
   * 189095
   */
  connections?: number;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example1.com
   */
  domain?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2022-02-21T15:00:00+08:00
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      domain: 'Domain',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      domain: 'string',
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

export class DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaConnDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of user connections at each time interval.
   */
  connectionDataPerInterval?: DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerInterval;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2015-02-22T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2A1EEF8-043E-43A1-807C-BEAC18EA1807
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2015-02-21T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDataPerInterval: 'ConnectionDataPerInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDataPerInterval: DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerInterval,
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.connectionDataPerInterval && typeof (this.connectionDataPerInterval as any).validate === 'function') {
      (this.connectionDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

