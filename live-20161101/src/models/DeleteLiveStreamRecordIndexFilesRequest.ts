// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveStreamRecordIndexFilesRequest extends $dara.Model {
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
   * The name of the main streaming domain.
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
   * The index file IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * c4d7f0a4-b506-43f9-8de3-07732c3f****
   */
  recordId?: string[];
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to delete the corresponding file in Object Storage Service (OSS) synchronously. Valid values:
   * 
   * *   **true**: The corresponding file in OSS is deleted.
   * *   **false**: The corresponding file in OSS is not deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  removeFile?: string;
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
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      recordId: 'RecordId',
      regionId: 'RegionId',
      removeFile: 'RemoveFile',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ownerId: 'number',
      recordId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      removeFile: 'string',
      streamName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordId)) {
      $dara.Model.validateArray(this.recordId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

