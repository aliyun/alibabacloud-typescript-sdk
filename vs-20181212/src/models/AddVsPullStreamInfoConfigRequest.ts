// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVsPullStreamInfoConfigRequest extends $dara.Model {
  always?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of stream pulling. Specify the time in UTC. The interval between StartTime and EndTime must be within 7 days, and EndTime must be later than the current time.
   * 
   * @example
   * 2017-08-28T09:30:30Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The origin server of the live stream. Separate multiple origin servers with semicolons (;).
   * 
   * This parameter is required.
   * 
   * @example
   * up.******.com.cn
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The start time of stream pulling. Specify the time in UTC. The interval between StartTime and EndTime must be within 7 days.
   * 
   * @example
   * 2017-08-28T07:30:30Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      always: 'Always',
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      always: 'string',
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

