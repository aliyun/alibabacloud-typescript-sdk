// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlObservationDataResponseBodyUrlDetailData extends $dara.Model {
  /**
   * @remarks
   * Measures the maximum layout mutation score for every unexpected layout change that occurs throughout the life of the page.
   * 
   * @example
   * 0.5
   */
  CLS?: number;
  /**
   * @remarks
   * The platform of the device.
   * 
   * @example
   * PC
   */
  clientPlatform?: string;
  /**
   * @remarks
   * The country or region to which the IP address belongs.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * Measures the time between when the page is loaded and when any part of the page\\"s content is rendered on the screen. Unit: ms.
   * 
   * @example
   * 123
   */
  FCP?: number;
  /**
   * @remarks
   * Measures the time between when the user first interacts with the page and when the browser is actually able to start processing an event handler in response to that interaction. Unit: ms.
   * 
   * @example
   * 123
   */
  FID?: number;
  /**
   * @remarks
   * Measures the responsiveness of the page, or how long it takes for the page to respond to user input visibly. Unit: ms.
   * 
   * @example
   * 123
   */
  INP?: number;
  /**
   * @remarks
   * Reports the rendering time of the largest image or text block visible in the viewport. Unit: ms.
   * 
   * @example
   * 123
   */
  LCP?: number;
  /**
   * @remarks
   * This metric measures the time between when a resource initiates a request and when the first byte of the response starts to arrive. Unit: ms.
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
   * The end of the time range during which data was queried.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The time must be in UTC.
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
   * The create time. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-11-06T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The objects that are returned.
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

