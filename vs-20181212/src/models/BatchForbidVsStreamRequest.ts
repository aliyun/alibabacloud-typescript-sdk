// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchForbidVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The stream name.
   * 
   * > - Format: AppName/StreamName.
   * >
   * > - Specify multiple names, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * live/stream1,live/stream2
   */
  channel?: string;
  controlStreamAction?: string;
  /**
   * @remarks
   * Your accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether the operation applies to stream ingest by a streamer or stream pulling by a client. Valid values:
   * 
   * - publisher (streamer ingest)
   * 
   * > Only publisher is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  /**
   * @remarks
   * Specifies whether to stop ingest without adding the stream to the blacklist. Valid values:
   * 
   * - yes
   * 
   * - no
   * 
   * @example
   * yes
   */
  oneshot?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time to resume ingest.
   * 
   * > Use UTC format. Example: 2015-12-01T17:37:00Z
   * 
   * @example
   * 2015-12-01T17:37:00Z
   */
  resumeTime?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      controlStreamAction: 'ControlStreamAction',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      oneshot: 'Oneshot',
      ownerId: 'OwnerId',
      resumeTime: 'ResumeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      controlStreamAction: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      ownerId: 'number',
      resumeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

