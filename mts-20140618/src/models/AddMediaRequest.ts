// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category to which the media file belongs. The value cannot be negative.
   * 
   * @example
   * 123
   */
  cateId?: number;
  /**
   * @remarks
   * The URL of the thumbnail. To obtain the URL, you can log on to the **MPS console** and choose **Workflows** > **Media Buckets**. Alternatively, you can log on to the **OSS console** and click **My OSS Paths**.
   * 
   * *   The value can be up to 3,200 bytes in length.
   * *   The URL complies with RFC 2396 and is encoded in UTF-8, with reserved characters being percent-encoded. For more information, see [URL encoding](https://help.aliyun.com/document_detail/423796.html).
   * 
   * @example
   * http://bucket.oss-cn-hangzhou.aliyuncs.com/example/1.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the media file.
   * 
   * *   The description can be up to 1,024 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * A test video
   */
  description?: string;
  /**
   * @remarks
   * The URL of the input file. You can obtain the URL in the MPS or OSS console. For more information, see the **Triggering and matching rule for a workflow** section of this topic.
   * 
   * *   Only OSS HTTP URLs are supported. Alibaba Cloud CDN URLs and HTTPS URLs are not supported.
   * *   The value can be up to 3,200 bytes in size.
   * *   The URL complies with RFC 2396 and is encoded in UTF-8. For more information, see [URL encoding](https://help.aliyun.com/document_detail/423796.html).
   * 
   * This parameter is required.
   * 
   * @example
   * http://bucket.oss-cn-hangzhou.aliyuncs.com/A/B/C/test.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * Specifies whether to check if the media workflow supports the specified input path. We recommend that you set this parameter to true to prevent errors that may result from invalid paths. Valid values:
   * 
   * *   **true**: checks whether the workflow supports the specified input path.
   * *   **false**: does not check whether the workflow supports the specified input path.
   * 
   * @example
   * false
   */
  inputUnbind?: boolean;
  /**
   * @remarks
   * The ID of the media workflow that you want to run for the media file. To query the ID of a media workflow, you can log on to the MPS console or call the [AddMediaWorkflow](https://help.aliyun.com/document_detail/44437.html) operation.
   * 
   * @example
   * 07da6c65da7f458997336e0de192****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The custom data of the media workflow.
   * 
   * *   The value can be up to 1,024 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * test
   */
  mediaWorkflowUserData?: string;
  /**
   * @remarks
   * The subtitle settings that are used to overwrite the original settings.
   * 
   * *   Example 1: Use `{"WebVTTSubtitleOverrides",[{"RefActivityName":"subtitleNode","WebVTTSubtitleURL":"http://test.oss-cn-hangzhou.aliyuncs.com/example1.vtt"}]}` to overwrite the original subtitle settings during HTTP Live Streaming (HLS) packaging.
   * *   Example 2: Use `{"subtitleTransNodeName":{"InputConfig":{"Format":"stl","InputFile":{"URL":"http://subtitleBucket.oss-cn-hangzhou.aliyuncs.com/package/example/CENG.stl"}}}}` to overwrite the original subtitle settings during Dynamic Adaptive Streaming over HTTP (DASH) packaging.
   * 
   * @example
   * {“subtitleTransNodeName”:{“InputConfig”:{“Format”:”stl”,”InputFile”:{“URL”:”http://exampleBucket.oss-cn-hangzhou.aliyuncs.com/package/example/CENG.stl"}}}}
   */
  overrideParams?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that you want to add to the media file.
   * 
   * > In MPS, each tag that is specified for a media file is independent. You can search for all the media files that have the same tags in the Media Library.
   * 
   * *   You can specify up to 16 tags for a media file. Separate multiple tags with commas (,).
   * *   Each tag can be up to 32 bytes in size
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the media file.
   * 
   * *   The title can be up to 128 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * mytest
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      coverURL: 'CoverURL',
      description: 'Description',
      fileURL: 'FileURL',
      inputUnbind: 'InputUnbind',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowUserData: 'MediaWorkflowUserData',
      overrideParams: 'OverrideParams',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      coverURL: 'string',
      description: 'string',
      fileURL: 'string',
      inputUnbind: 'boolean',
      mediaWorkflowId: 'string',
      mediaWorkflowUserData: 'string',
      overrideParams: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

