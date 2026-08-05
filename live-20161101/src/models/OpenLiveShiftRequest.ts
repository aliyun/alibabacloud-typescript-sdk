// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenLiveShiftRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application. The wildcard character (\\*) is supported. An asterisk (\\*) represents all applications under the specified domain name. For more information, see [Stream management](https://help.aliyun.com/document_detail/197397.html).
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The duration of an HTTP Live Streaming (HLS) transport stream (TS) segment. Unit: seconds.
   * 
   * @example
   * 3
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable time shifting for transcoded streams. Valid values:
   * 
   * - **true**: Time shifting is disabled for transcoded streams.
   * 
   * - **false**: Time shifting is enabled for transcoded streams.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  ignoreTranscode?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stream. The wildcard character (\\*) is supported. An asterisk (\\*) represents all streams under the specified application. For more information, see [Stream management](https://help.aliyun.com/document_detail/197397.html).
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The data retention period. The default value is 7. Unit: days.
   * 
   * @example
   * 10
   */
  vision?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      duration: 'Duration',
      ignoreTranscode: 'IgnoreTranscode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      streamName: 'StreamName',
      vision: 'Vision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      duration: 'number',
      ignoreTranscode: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      streamName: 'string',
      vision: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

