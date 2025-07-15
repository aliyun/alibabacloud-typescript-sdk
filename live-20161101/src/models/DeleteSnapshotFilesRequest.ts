// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The timestamps when the snapshots that you want to delete were captured.
   * 
   * This parameter is required.
   * 
   * @example
   * 1653641526637
   */
  createTimestampList?: number[];
  /**
   * @remarks
   * The main streaming domain.
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
   * Specifies whether to also delete the corresponding file in Object Storage Service (OSS) at the same time. Value values:
   * 
   * *   **true**: deletes the corresponding file in OSS.
   * *   **false**: does not delete the corresponding file in OSS.
   * 
   * >  To delete the corresponding file in OSS, you must have the permissions on the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  removeFile?: boolean;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createTimestampList: 'CreateTimestampList',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removeFile: 'RemoveFile',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTimestampList: { 'type': 'array', 'itemType': 'number' },
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
      removeFile: 'boolean',
      streamName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.createTimestampList)) {
      $dara.Model.validateArray(this.createTimestampList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

