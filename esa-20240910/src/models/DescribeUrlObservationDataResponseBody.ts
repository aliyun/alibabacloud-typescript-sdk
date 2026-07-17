// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlObservationDataResponseBodyUrlDetailData extends $dara.Model {
  /**
   * @remarks
   * The metric that measures the largest burst of layout shift scores for every unexpected layout shift that occurs throughout the entire lifecycle of a page.
   * 
   * @example
   * 0.5
   */
  CLS?: number;
  /**
   * @remarks
   * The device platform.
   * 
   * @example
   * PC
   */
  clientPlatform?: string;
  /**
   * @remarks
   * The country.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The time from when the page starts loading to when any part of the page content is rendered on the screen. Unit: ms.
   * 
   * @example
   * 123
   */
  FCP?: number;
  /**
   * @remarks
   * The time from when a user first interacts with a page to when the browser is actually able to begin processing event handlers in response to that interaction. Unit: ms.
   * 
   * @example
   * 123
   */
  FID?: number;
  /**
   * @remarks
   * The responsiveness of a page, specifically how long it takes for the page to visibly respond to user input. Unit: ms.
   * 
   * @example
   * 123
   */
  INP?: number;
  /**
   * @remarks
   * The render time of the largest image or text block visible within the viewport. Unit: ms.
   * 
   * @example
   * 123
   */
  LCP?: number;
  /**
   * @remarks
   * The time from when a resource request is initiated to when the first byte of the response begins to arrive. Unit: ms.
   * 
   * @example
   * 123
   */
  TTFB?: number;
  /**
   * @remarks
   * The URL of the web page to monitor.
   * 
   * @example
   * example.com/test
   */
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
  /**
   * @remarks
   * The end time for the data query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-04-19T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The start time. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-11-06T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The returned data.
   */
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

