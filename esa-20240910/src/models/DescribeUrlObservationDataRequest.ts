// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlObservationDataRequest extends $dara.Model {
  /**
   * @remarks
   * The platform of the device. If the parameter is left empty, all devices are queried.
   * 
   * *   PC
   * *   Mobile
   * 
   * @example
   * PC
   */
  clientPlatform?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The time must be in UTC.
   * 
   * @example
   * 2023-04-19T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric data that is detected.
   * 
   * *   TTFB: Measures the time between when a resource initiates a request and when the first byte of the response starts to arrive.
   * *   FCP: Measures the time between when the page is loaded and when any part of the page\\"s content is rendered on the screen.
   * *   LCP: Reports the rendering time of the largest image or text block visible in the viewport.
   * *   CLS: A metric that measures the maximum layout mutation score for every unexpected layout change that occurs throughout the life of the page.
   * *   INP: Measures the responsiveness of the page, or how long it takes for the page to respond to user input in a visible way.
   * *   FID: Measures the time between when the user first interacts with the page and when the browser is actually able to start processing the event handler in response to that interaction.
   * 
   * @example
   * TTFB
   */
  metric?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 54362329990032
   */
  siteId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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

