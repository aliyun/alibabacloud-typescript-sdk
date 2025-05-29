// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchForbidVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * live/stream1,live/stream2
   */
  channel?: string;
  controlStreamAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
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

