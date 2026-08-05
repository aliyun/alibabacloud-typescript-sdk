// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeLiveStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the ingest stream belongs. You can set this parameter to * to indicate all AppName values (no restriction on AppName). You can view the AppName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
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
   * Specifies whether the stream is a streamer ingest stream or a client playback stream. Currently supported value: **publisher** (streamer ingest).
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
   * The name of the ingest stream. You can view the StreamName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
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

