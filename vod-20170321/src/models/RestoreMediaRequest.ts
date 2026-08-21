// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The media IDs, which are audio or video IDs (VideoId). Separate multiple IDs with commas (,). A maximum of 20 IDs are supported. You can obtain the IDs by using the following methods:
   * 
   * - For audio or video files uploaded in the console, log on to the ApsaraVideo VOD console and choose Media Files > Audio/Video to view the audio or video ID.
   * - When you call the CreateUploadVideo operation to obtain the upload URL and credential, the video ID is the value of the VideoId parameter in the response.
   * - After the audio or video file is uploaded, you can call the SearchMedia operation to query the video ID, which is the value of the VideoId parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 8bc8e94fe4e55abde85718****,eb186180e989dd56****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The restoration duration. Default value: 1 day. Maximum value for Archive media assets: 7 days. Maximum value for Cold Archive media assets: 365 days.
   * 
   * @example
   * 2
   */
  restoreDays?: string;
  /**
   * @remarks
   * The restoration priority. This parameter is required only for Cold Archive media assets. If this parameter is not specified, the default value **Standard** is used. Valid values:
   * - **Expedited**: High priority. The restoration is completed within 1 hour.
   * - **Standard** (default): Standard priority. The restoration is completed within 2 to 5 hours.
   * - **Bulk**: Batch priority. The restoration is completed within 5 to 12 hours.
   * 
   * @example
   * Standard
   */
  restoreTier?: string;
  /**
   * @remarks
   * The scope of the change. If this parameter is not specified, the default value **All** is used. Valid values:
   * - **All** (default): Applies tiered storage to all resources (source files and transcoded streams) of the media asset.
   * - **SourceFile**: Applies tiered storage only to the video source file of the media asset ID. Resources other than the source file use Standard storage.
   * 
   * @example
   * All
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      restoreDays: 'RestoreDays',
      restoreTier: 'RestoreTier',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
      restoreDays: 'string',
      restoreTier: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

