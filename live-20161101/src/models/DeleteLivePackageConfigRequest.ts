// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLivePackageConfigRequest extends $dara.Model {
  /**
   * @remarks
   * App name, `*` matches all names.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * Live streaming domain (primary playback domain).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * Live stream name, `*` matches all streams under AppName.
   * 
   * This parameter is required.
   * 
   * @example
   * StreamName
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

