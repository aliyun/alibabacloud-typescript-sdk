// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveDomainMultiStreamMasterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * testapp
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  /**
   * @remarks
   * The unique identifier of the stream ingest.
   * 
   * This parameter is required.
   * 
   * @example
   * teststream_***
   */
  upstreamSequence?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domain: 'Domain',
      ownerId: 'OwnerId',
      streamName: 'StreamName',
      upstreamSequence: 'UpstreamSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domain: 'string',
      ownerId: 'number',
      streamName: 'string',
      upstreamSequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

