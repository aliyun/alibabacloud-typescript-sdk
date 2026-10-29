// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchResumeVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The stream name in the format of AppName/StreamName. Separate multiple stream names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * live/stream1
   */
  channel?: string;
  /**
   * @remarks
   * The stream control operation. Set the value to resume to resume the stream push.
   * 
   * @example
   * resume
   */
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
   * Specifies whether the stream is pushed by the broadcaster or pulled by the client. Valid value: publisher (broadcaster push).
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

