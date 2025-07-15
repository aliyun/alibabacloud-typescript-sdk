// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLivePrivateLineRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration type. Valid values:
   * 
   * *   play: streaming acceleration
   * *   publish: stream ingest acceleration
   * 
   * This parameter is required.
   * 
   * @example
   * play
   */
  accelerationType?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * live
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * testStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationType: 'AccelerationType',
      appName: 'AppName',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationType: 'string',
      appName: 'string',
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
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

