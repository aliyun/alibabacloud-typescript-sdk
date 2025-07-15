// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenLiveShiftRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can specify an asterisk (\\*) as the value to match all applications under the domain name. You can view the application name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The length of a TS segment for HTTP Live Streaming (HLS). Unit: seconds.
   * 
   * @example
   * 3
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to disable time shifting for the transcoded stream. Valid values:
   * 
   * *   **true**: disables time shifting for the transcoded stream.
   * *   **false**: enables time shifting for the transcoded stream.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  ignoreTranscode?: boolean;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. You can specify an asterisk (\\*) as the value to match all streams in the application. You can view the stream name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The duration for which data is retained. Default value: 7. Unit: day.
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

