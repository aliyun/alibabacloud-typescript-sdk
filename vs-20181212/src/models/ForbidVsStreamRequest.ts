// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForbidVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  controlStreamAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  /**
   * @example
   * yes
   */
  oneshot?: string;
  ownerId?: number;
  /**
   * @example
   * 2015-12-01T17:37:00Z
   */
  resumeTime?: string;
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

