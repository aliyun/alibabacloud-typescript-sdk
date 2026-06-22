// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageSplicingTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alignment value, in pixels, for the width or height of the images to be stitched. The value can range from 1 to 4096.
   * 
   * - If you set **Direction** to `vertical`, this parameter specifies the width alignment.
   * 
   * - If you set **Direction** to `horizontal`, this parameter specifies the height alignment.
   * 
   * > If you do not specify this parameter, the width or height of the first image is used for alignment by default.
   * 
   * @example
   * 192
   */
  align?: number;
  /**
   * @remarks
   * The fill color for the areas specified by `Padding` and `Margin`. The value can be in the `#FFFFFF` format or a keyword such as `red` or `alpha`.
   * 
   * @example
   * red
   */
  backgroundColor?: string;
  /**
   * @remarks
   * The chained authorization configuration. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The image stitching method. Valid values:
   * 
   * - vertical (default): Stitches images vertically. The widths of all images must be the same.
   * 
   * - horizontal: Stitches images horizontally. The heights of all images must be the same.
   * 
   * @example
   * vertical
   */
  direction?: string;
  /**
   * @remarks
   * The compression format of the output image. Valid values:
   * 
   * - jpg (default)
   * 
   * - png
   * 
   * - webp
   * 
   * @example
   * jpg
   */
  imageFormat?: string;
  /**
   * @remarks
   * The blank margin, in pixels, of the stitched image. The default value is 0.
   * 
   * @example
   * 2
   */
  margin?: number;
  /**
   * @remarks
   * The message notification configuration. For information about the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The space, in pixels, between sub-images in the stitched image. The default value is 0.
   * 
   * @example
   * 2
   */
  padding?: number;
  /**
   * @remarks
   * The project name. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The compression quality of the output image. This parameter is valid only for JPG and WebP images. The value range is 0 to 100. The default value is 80.
   * 
   * @example
   * 80
   */
  quality?: number;
  /**
   * @remarks
   * The scaling method used when the width or height of an image is aligned. Valid values:
   * 
   * - fit (default): Scales the image without adding black bars. Only proportional scaling is supported.
   * 
   * - stretch: Stretches the image to fill the space.
   * 
   * @example
   * stretch
   */
  scaleType?: string;
  /**
   * @remarks
   * The list of input images. The images are stitched in the order of their URIs in the list.
   * 
   * This parameter is required.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * Custom tags used to search for and filter asynchronous tasks.
   * 
   * @example
   * {
   *       "User": "Jane"
   * }
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The OSS URI where the output image is stored.
   * 
   * The URI must be in the oss\\://${bucketname}/${objectname} format. ${bucketname} is the name of the OSS bucket that is in the same region as the project. ${objectname} is the path of the file, including the file name.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/outputImage.jpg
   */
  targetURI?: string;
  /**
   * @remarks
   * The custom information. This information is returned in the asynchronous notification message. Use this information to associate the notification message with your system. The maximum length is 2,048 bytes.
   * 
   * @example
   * test-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      align: 'Align',
      backgroundColor: 'BackgroundColor',
      credentialConfigShrink: 'CredentialConfig',
      direction: 'Direction',
      imageFormat: 'ImageFormat',
      margin: 'Margin',
      notificationShrink: 'Notification',
      padding: 'Padding',
      projectName: 'ProjectName',
      quality: 'Quality',
      scaleType: 'ScaleType',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      align: 'number',
      backgroundColor: 'string',
      credentialConfigShrink: 'string',
      direction: 'string',
      imageFormat: 'string',
      margin: 'number',
      notificationShrink: 'string',
      padding: 'number',
      projectName: 'string',
      quality: 'number',
      scaleType: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

