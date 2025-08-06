// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset (VideoId). Separate multiple IDs with commas (,). You can specify a maximum of 20 IDs. You can use one of the following methods to obtain the ID of the media asset:
   * 
   * *   Log on to the ApsaraVideo VOD console. In the left-side navigation pane, choose Media Files > Audio/Video. On the Video and Audio page, view the ID of the media asset. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of VideoId from the response to the CreateUploadVideo operation that you call to upload media assets.
   * *   Obtain the value of VideoId from the response to the SearchMedia operation that you call to query the media ID after the media asset is uploaded.
   * 
   * This parameter is required.
   * 
   * @example
   * 8bc8e94fe4e55abde85718****,eb186180e989dd56****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The number of days during which media assets remain in the restored state. Default value: 1. The maximum validity period of a restored Archive media asset is 7 days and the maximum validity period of a restored Cold Archive media asset is 365 days.
   * 
   * @example
   * 2
   */
  restoreDays?: string;
  /**
   * @remarks
   * The restoration priority. This parameter is required only when you restore a Cold Archive media file. Valid values:
   * 
   * *   **Expedited**: The file is restored within 1 hour.
   * *   **Standard**: The file is restored within 2 to 5 hours.
   * *   **Bulk**: The file is restored within 5 to 12 hours.
   * 
   * @example
   * Standard
   */
  restoreTier?: string;
  /**
   * @remarks
   * The modification range. Valid values:
   * 
   * *   **All**: restores all resources, including the source files and transcoded streams.
   * *   **SourceFile**: restores only the source files.
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

