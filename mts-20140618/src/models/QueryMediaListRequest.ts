// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include media information in the returned result.
   * 
   * *   Valid values: true and false.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  includeMediaInfo?: boolean;
  /**
   * @remarks
   * Specifies whether to include playback information in the returned result.
   * 
   * *   Valid values: true and false.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  includePlayList?: boolean;
  /**
   * @remarks
   * Specifies whether to include snapshot information in the returned result.
   * 
   * *   Valid values: true and false.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  includeSnapshotList?: boolean;
  /**
   * @remarks
   * Specifies whether to include summaries in the returned result.
   * 
   * *   Valid values: true and false.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  includeSummaryList?: boolean;
  /**
   * @remarks
   * The IDs of the media files. To obtain the ID of a media file, you can perform the following operations in the ApsaraVideo Media Processing (MPS) console: In the left-side navigation pane, choose **Media Management** > **Media List**. Find the required video and click Manage. The ID of the video is displayed on the Basics tab. Separate multiple IDs with commas (,). You can query up to 10 media files at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e1cd21131a94525be55acf65888****,e26cfa29e784402388463f61dbec****
   */
  mediaIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      includeMediaInfo: 'IncludeMediaInfo',
      includePlayList: 'IncludePlayList',
      includeSnapshotList: 'IncludeSnapshotList',
      includeSummaryList: 'IncludeSummaryList',
      mediaIds: 'MediaIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeMediaInfo: 'boolean',
      includePlayList: 'boolean',
      includeSnapshotList: 'boolean',
      includeSummaryList: 'boolean',
      mediaIds: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

