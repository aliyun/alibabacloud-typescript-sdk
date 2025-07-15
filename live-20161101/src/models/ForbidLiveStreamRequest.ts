// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForbidLiveStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can view the application name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
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
   * Specifies whether the live stream is ingested by a streamer or played by a viewer. Set the value to **publisher**.
   * 
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  /**
   * @remarks
   * Specifies whether to only interrupt the live stream without adding the ingest URL of the live stream to the blacklist. Valid values:
   * 
   * *   **yes**: interrupts the live stream but does not add the ingest URL of the live stream to the blacklist. This value is available only when the live stream is ingested or played in the upstream.
   * *   **no**: disables the live stream and adds the ingest URL of the live stream to the blacklist.
   * 
   * >  If you do not specify this parameter, the default value no is used.
   * 
   * @example
   * yes
   */
  oneshot?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The time when the live stream is resumed. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > 
   * 
   * *   If you set the **Oneshot** parameter to **no** and do not specify this parameter, the live stream is disabled for six months by default.
   * 
   * *   If you specify this parameter, the live stream is resumed at the specified point in time.
   * 
   * @example
   * 2015-12-01T10:37:00Z
   */
  resumeTime?: string;
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
      oneshot: 'Oneshot',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resumeTime: 'ResumeTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      ownerId: 'number',
      regionId: 'string',
      resumeTime: 'string',
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

