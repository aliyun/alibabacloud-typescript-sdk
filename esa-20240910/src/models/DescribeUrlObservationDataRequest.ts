// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlObservationDataRequest extends $dara.Model {
  /**
   * @example
   * PC
   */
  clientPlatform?: string;
  /**
   * @example
   * 2023-04-19T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * TTFB
   */
  metric?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 54362329990032
   */
  siteId?: string;
  /**
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  /**
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

