// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaStorageClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow storage class modification for media assets that have not met the minimum storage duration requirement. Valid values:
   * 
   * - **true**: Allowed.
   * - **false (default)**: Not allowed.
   * 
   * >If the storage duration of a media asset is insufficient and you force a storage class modification, additional retrieval fees are incurred.
   * 
   * @example
   * false
   */
  allowUpdateWithoutTimeLimit?: boolean;
  /**
   * @remarks
   * The media IDs, which are audio or video IDs (VideoId). Separate multiple IDs with commas (,). A maximum of 20 IDs are supported. You can obtain the IDs by using the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - When you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the video ID is the value of the VideoId response parameter.
   * - After the audio or video file is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID, which is the value of the VideoId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * d56c2ac0cee271ed80004710b5ba****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The restore priority (required only for ColdArchive media assets). If this parameter is not specified, the default value **Standard** is used. Valid values:
   * - **Expedited**: Expedited
   * - **Standard** (default): Standard
   * - **Bulk**: Bulk
   * 
   * @example
   * Standard
   */
  restoreTier?: string;
  /**
   * @remarks
   * The scope of the modification. If this parameter is not specified, the default value **All** is used. Valid values:
   * - **All** (default): Applies tiered storage to all resources (source files and transcoded streams) of the media asset.
   * - **SourceFile**: Applies tiered storage only to the source file of the media asset. Resources other than the source file use Standard storage.
   * 
   * @example
   * All
   */
  scope?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * - **Standard**: Standard
   * - **IA**: Infrequent Access
   * - **Archive**: Archive
   * - **ColdArchive**: Cold Archive
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

