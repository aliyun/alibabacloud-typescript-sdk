// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxApp
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
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      controlStreamAction: 'ControlStreamAction',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      ownerId: 'OwnerId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      controlStreamAction: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      ownerId: 'number',
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

