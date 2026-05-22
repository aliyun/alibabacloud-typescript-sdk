// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlObservationDataRequest extends $dara.Model {
  clientPlatform?: string;
  endTime?: string;
  metric?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: string;
  startTime?: string;
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

