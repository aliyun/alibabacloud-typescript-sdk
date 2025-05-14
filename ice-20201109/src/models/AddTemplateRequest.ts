// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateRequest extends $dara.Model {
  /**
   * @example
   * 参见Timeline模板Config文档
   */
  config?: string;
  /**
   * @remarks
   * The URL of the template thumbnail.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg
   */
  coverUrl?: string;
  /**
   * @remarks
   * The name of the custom template.
   * 
   * @example
   * 视频添加水印模板
   */
  name?: string;
  /**
   * @remarks
   * The ID of the template preview video.
   * 
   * @example
   * ****01bf24bf41c78b2754cb3187****
   */
  previewMedia?: string;
  /**
   * @remarks
   * The IDs of the materials associated with the template for use by the regular template editor.
   * 
   * @example
   * {"video":["1805a0c6ca544fb395a06ca683619655"]}
   */
  relatedMediaids?: string;
  /**
   * @remarks
   * The source from which the template is created. Valid values:
   * 
   * *   OpenAPI
   * *   AliyunConsole
   * *   WebSDK
   * 
   * <!---->
   * 
   * @example
   * OpenAPI
   */
  source?: string;
  /**
   * @remarks
   * The template state. Valid values:
   * 
   * *   Available: The template is available.
   * *   Created: The template is created but not ready for use.
   * *   Uploading: The video is being uploaded.
   * *   Processing: The advanced template is being processed.
   * *   UploadFailed: Failed to upload the video.
   * *   ProcessFailed: Failed to process the advanced template.
   * 
   * <!---->
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * *   Timeline: a regular template created based on the timeline of a video editing project, in which multiple materials are arranged in sequence across multiple layers. It can be used to convert text and images into videos, create photo albums, add opening and closing parts, and apply the default watermark.
   * *   VETemplate: an advanced template created using effects of Adobe After Effects (AE). It can be used to produce complex animations and advanced media effects.
   * 
   * <!---->
   * 
   * @example
   * Timeline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      coverUrl: 'CoverUrl',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      relatedMediaids: 'RelatedMediaids',
      source: 'Source',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      coverUrl: 'string',
      name: 'string',
      previewMedia: 'string',
      relatedMediaids: 'string',
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

