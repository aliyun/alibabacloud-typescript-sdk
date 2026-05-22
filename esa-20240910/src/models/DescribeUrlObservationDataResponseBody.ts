// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlObservationDataResponseBodyUrlDetailData extends $dara.Model {
  CLS?: number;
  clientPlatform?: string;
  country?: string;
  FCP?: number;
  FID?: number;
  INP?: number;
  LCP?: number;
  TTFB?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      CLS: 'CLS',
      clientPlatform: 'ClientPlatform',
      country: 'Country',
      FCP: 'FCP',
      FID: 'FID',
      INP: 'INP',
      LCP: 'LCP',
      TTFB: 'TTFB',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CLS: 'number',
      clientPlatform: 'string',
      country: 'string',
      FCP: 'number',
      FID: 'number',
      INP: 'number',
      LCP: 'number',
      TTFB: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlObservationDataResponseBody extends $dara.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  urlDetailData?: DescribeUrlObservationDataResponseBodyUrlDetailData[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      urlDetailData: 'UrlDetailData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      urlDetailData: { 'type': 'array', 'itemType': DescribeUrlObservationDataResponseBodyUrlDetailData },
    };
  }

  validate() {
    if(Array.isArray(this.urlDetailData)) {
      $dara.Model.validateArray(this.urlDetailData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

