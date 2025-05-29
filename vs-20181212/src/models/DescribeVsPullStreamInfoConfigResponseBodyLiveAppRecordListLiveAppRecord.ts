// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2016-05-15T07:30:00Z
   */
  endTime?: string;
  /**
   * @example
   * http://test
   */
  sourceUrl?: string;
  /**
   * @example
   * 2016-05-15T01:30:00Z
   */
  startTime?: string;
  /**
   * @example
   * xxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      sourceUrl: 'string',
      startTime: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

