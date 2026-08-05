// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * A list of timestamps of the snapshots to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 1653641526637
   */
  createTimestampList?: number[];
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to also delete the snapshot files from OSS. Valid values:
   * 
   * - **true**: Deletes.
   * 
   * - **false**: Does not delete.
   * 
   * > To delete files from OSS, you must have the required permissions for OSS file operations.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  removeFile?: boolean;
  /**
   * @remarks
   * The stream name.
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

