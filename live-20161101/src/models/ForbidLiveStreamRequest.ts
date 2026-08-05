// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForbidLiveStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the ingest stream belongs. You can view the AppName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
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
   * Specifies whether to disable stream ingest or streaming. Currently, only disabling stream ingest is supported: **publisher**.
   * 
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  /**
   * @remarks
   * Specifies whether to only interrupt the stream without adding it to the blacklist. Valid values:
   * 
   * - **yes**: Only interrupts the stream without adding it to the blacklist (supports upstream ingest or upstream streaming).
   * 
   * - **no**: Interrupts the stream and adds it to the blacklist.
   * 
   * > Default value: no.
   * 
   * @example
   * yes
   */
  oneshot?: string;
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
   * The time to resume the stream. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * > - If the **Oneshot** parameter is set to **no** and ResumeTime is not specified, the live stream is disabled for 6 months by default.
   * > - If a value is specified, the restriction is lifted at the time specified by ResumeTime and the live stream is resumed.
   * 
   * @example
   * 2015-12-01T10:37:00Z
   */
  resumeTime?: string;
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

