// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchResumeVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the stream in the AppName/StreamName format. To specify multiple streams, separate the stream names with commas.
   * 
   * This parameter is required.
   * 
   * @example
   * live/stream1
   */
  channel?: string;
  controlStreamAction?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of live stream. Only publisher is supported, which indicates that the stream is ingested by a streamer.
   * 
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      controlStreamAction: 'ControlStreamAction',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      controlStreamAction: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

