// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaStorageClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the storage class modification for media assets that do not meet the minimum storage duration requirement. Valid values:
   * 
   * - **true**: Allowed.
   * - **false** (default): Not allowed.
   * 
   * > If the storage duration of the media asset is insufficient, forcing a storage class modification incurs additional data retrieval fees.
   * 
   * @example
   * false
   */
  allowUpdateWithoutTimeLimit?: boolean;
  /**
   * @remarks
   * The media asset IDs, which are the audio or video IDs (VideoId). Separate multiple IDs with commas (,). You can specify up to 20 IDs. You can obtain the IDs by using one of the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Assets** > **Audio/Video** to view the audio or video IDs.
   * - When you call the [Obtain upload URLs and credentials for audio and video files](https://help.aliyun.com/document_detail/55407.html) operation, the value of the VideoId response parameter is the media asset ID.
   * - After an audio or video file is uploaded, you can call the [Search for media asset information](https://help.aliyun.com/document_detail/86044.html) operation to query the media asset ID. The value of the VideoId response parameter is the media asset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d56c2ac0cee271ed80004710b5ba****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The restoration priority. This parameter is required only for Cold Archive media assets. If you do not specify this parameter, the default value **Standard** is used. Valid values:
   * - **Expedited**: Expedited.
   * - **Standard** (default): Standard.
   * - **Bulk**: Bulk.
   * 
   * @example
   * Standard
   */
  restoreTier?: string;
  /**
   * @remarks
   * The scope of the modification. If you do not specify this parameter, the default value **All** is used. Valid values:
   * - **All** (default): applies tiered storage to all resources of the media asset, including the source file and transcoded streams.
   * - **SourceFile**: applies tiered storage only to the video source file of the media asset ID. Resources other than the source file are stored in Standard storage.
   * 
   * @example
   * All
   */
  scope?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * - **Standard**: Standard.
   * - **IA**: Infrequent Access (IA).
   * - **Archive**: Archive.
   * - **ColdArchive**: Cold Archive.
   * 
   * This parameter is required.
   * 
   * @example
   * Archive
   */
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      allowUpdateWithoutTimeLimit: 'AllowUpdateWithoutTimeLimit',
      mediaIds: 'MediaIds',
      restoreTier: 'RestoreTier',
      scope: 'Scope',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUpdateWithoutTimeLimit: 'boolean',
      mediaIds: 'string',
      restoreTier: 'string',
      scope: 'string',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

