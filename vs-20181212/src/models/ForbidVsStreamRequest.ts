// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForbidVsStreamRequest extends $dara.Model {
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
  controlStreamAction?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Only "publisher" is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  /**
   * @remarks
   * Specifies whether to only interrupt the stream without adding it to the blacklist. A value of \\`yes\\` indicates that the stream is only interrupted.
   * 
   * @example
   * yes
   */
  oneshot?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time to resume the stream. The time is in UTC format.
   * 
   * @example
   * 2015-12-01T17:37:00Z
   */
  resumeTime?: string;
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
      appName: 'AppName',
      controlStreamAction: 'ControlStreamAction',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      oneshot: 'Oneshot',
      ownerId: 'OwnerId',
      resumeTime: 'ResumeTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      controlStreamAction: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      ownerId: 'number',
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

