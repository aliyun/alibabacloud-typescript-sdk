// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListByURLRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS URLs of the media files. To obtain the OSS URL of a media file, you can perform the following operations in the ApsaraVideo Media Processing (MPS) console: In the left-side navigation pane, choose **Media Management** > **Media List**. Find the media file whose OSS URL you want to view and click **Manage** in the **Actions** column. The OSS URL of the media file is displayed on the **Obtain Encoding URL** tab. Separate multiple URLs with commas (,). You can query up to 10 media files at a time.
   * 
   * *   The URL complies with RFC 3986 and is encoded in UTF-8, with reserved characters being percent-encoded. The value can be up to 3,200 bytes in size. For more information, see [URL encoding](https://help.aliyun.com/document_detail/423796.html).
   * *   Only OSS HTTP URLs are supported. Alibaba Cloud CDN URLs and HTTPS URLs are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example-bucket-****.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  fileURLs?: string;
  /**
   * @remarks
   * Specifies whether to include media information in the returned result.
   * 
   * *   Valid values: true and false.
   * 
   * *   Default value: **false**.
   * 
   * > To obtain detailed information about the media files, set this parameter to true.
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
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fileURLs: 'FileURLs',
      includeMediaInfo: 'IncludeMediaInfo',
      includePlayList: 'IncludePlayList',
      includeSnapshotList: 'IncludeSnapshotList',
      includeSummaryList: 'IncludeSummaryList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURLs: 'string',
      includeMediaInfo: 'boolean',
      includePlayList: 'boolean',
      includeSnapshotList: 'boolean',
      includeSummaryList: 'boolean',
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

