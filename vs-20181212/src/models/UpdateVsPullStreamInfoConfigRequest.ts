// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVsPullStreamInfoConfigRequest extends $dara.Model {
  always?: string;
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * Your stream pulling domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of stream pulling.
   * 
   * > UTC time format. The interval between StartTime and EndTime must be within 7 days, and EndTime must be later than the current time.
   * 
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The origin server of your live stream.
   * 
   * > Supports multiple values, separated by English semicolons (;).
   * 
   * This parameter is required.
   * 
   * @example
   * up.xxx.com.cn
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The start time of stream pulling.
   * 
   * > UTC time format. The interval between StartTime and EndTime must be within 7 days.
   * 
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream.
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

