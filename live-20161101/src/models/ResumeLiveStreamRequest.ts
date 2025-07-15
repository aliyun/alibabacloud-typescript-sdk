// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeLiveStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can specify an asterisk (\\*) as the value to match all applications. You can view the application name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether the live stream is ingested by a streamer or played by a client. Set the value to **publisher**, which specifies that the live stream is ingested by a streamer.
   * 
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The name of the ingested stream. You can view the stream name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      ownerId: 'number',
      securityToken: 'string',
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

