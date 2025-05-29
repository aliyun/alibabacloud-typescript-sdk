// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVsPullStreamInfoConfigRequest extends $dara.Model {
  always?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2017-08-28T09:30:30Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * up.******.com.cn
   */
  sourceUrl?: string;
  /**
   * @example
   * 2017-08-28T07:30:30Z
   */
  startTime?: string;
  /**
   * @remarks
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

