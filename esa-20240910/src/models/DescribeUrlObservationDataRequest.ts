// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlObservationDataRequest extends $dara.Model {
  /**
   * @remarks
   * The device platform. If this parameter is left empty, data for all platforms is queried.
   * 
   * - PC
   * 
   * - Mobile
   * 
   * @example
   * PC
   */
  clientPlatform?: string;
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
   * The metric to query.
   * 
   * *  TTFB: Measures the time from when a resource request is initiated to when the first byte of the response begins to arrive.
   * *  FCP: Measures the time from when the page starts loading to when any part of the page content is rendered on the screen.
   * * LCP: Reports the render time of the largest image or text block visible within the viewport.
   * * CLS: A metric that measures the largest burst of layout shift scores for every unexpected layout shift that occurs throughout the entire lifecycle of a page.
   * * INP: Measures the responsiveness of a page, specifically how long it takes for the page to visibly respond to user input.
   * * FID: Measures the time from when a user first interacts with a page to when the browser is actually able to begin processing event handlers in response to that interaction.
   * 
   * @example
   * TTFB
   */
  metric?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 54362329990032
   */
  siteId?: string;
  /**
   * @remarks
   * The start time for the data query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
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
      clientPlatform: 'ClientPlatform',
      endTime: 'EndTime',
      metric: 'Metric',
      siteId: 'SiteId',
      startTime: 'StartTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPlatform: 'string',
      endTime: 'string',
      metric: 'string',
      siteId: 'string',
      startTime: 'string',
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

