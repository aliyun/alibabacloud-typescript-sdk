// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSL7QpsListResponseBodyDataModule extends $dara.Model {
  attack?: number;
  normal?: number;
  timeStamp?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attack: 'Attack',
      normal: 'Normal',
      timeStamp: 'TimeStamp',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attack: 'number',
      normal: 'number',
      timeStamp: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSL7QpsListResponseBody extends $dara.Model {
  dataInterval?: number;
  dataModule?: DescribeDDoSL7QpsListResponseBodyDataModule[];
  endTime?: string;
  recordId?: number;
  requestId?: string;
  siteId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      dataModule: 'DataModule',
      endTime: 'EndTime',
      recordId: 'RecordId',
      requestId: 'RequestId',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'number',
      dataModule: { 'type': 'array', 'itemType': DescribeDDoSL7QpsListResponseBodyDataModule },
      endTime: 'string',
      recordId: 'number',
      requestId: 'string',
      siteId: 'number',
      startTime: 'string',
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

