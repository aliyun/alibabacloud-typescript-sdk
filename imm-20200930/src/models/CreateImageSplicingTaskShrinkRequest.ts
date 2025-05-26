// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageSplicingTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The width or height with which the input images must align. Valid values: 1 to 4096. Unit: px.
   * 
   * *   If you set **Direction** to `vertical`, this parameter specifies the width with which the input images must align.
   * *   If you set **Direction** to `horizontal`, this parameter specifies the height with which the input images must align.
   * 
   * >  If you do not specify this parameter, the width or height of the first input image is used.
   * 
   * @example
   * 192
   */
  align?: number;
  /**
   * @remarks
   * The padding color of the spaces specified by `Padding` and `Margin`. Colors encoded in the `#FFFFFF` format and colors that are related to preset keywords such as `red` and `alpha` are supported.
   * 
   * @example
   * red
   */
  backgroundColor?: string;
  /**
   * @remarks
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The splicing method. Valid values:
   * 
   * *   vertical (default): All input images are vertically aligned and have the same width.
   * *   horizontal: All input images are horizontally aligned and have the same height.
   * 
   * @example
   * vertical
   */
  direction?: string;
  /**
   * @remarks
   * The compression format of the output image. Valid values:
   * 
   * *   jpg (default)
   * *   png
   * *   webp
   * 
   * @example
   * jpg
   */
  imageFormat?: string;
  /**
   * @remarks
   * The empty space or border around the edges of the output image. Default value: 0. Unit: px.
   * 
   * @example
   * 2
   */
  margin?: number;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The space between component images in the output image. Default value: 0. Unit: px.
   * 
   * @example
   * 2
   */
  padding?: number;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The compression quality of the output image. This parameter takes effect only for JPG and WebP images. Valid values: 0 to 100. Default value: 80.
   * 
   * @example
   * 80
   */
  quality?: number;
  /**
   * @remarks
   * The scaling mode of the input images that are vertically or horizontally aligned. Valid values:
   * 
   * *   fit (default): Input images are scaled proportionally, and black edges are not retained.
   * *   stretch: Input images are stretched to fill the space.
   * *   horizon: Input images are horizontally stretched.
   * *   vertical: Input images are vertically stretched.
   * 
   * @example
   * stretch
   */
  scaleType?: string;
  /**
   * @remarks
   * The input images. The images are sliced in the order of the input image URIs.
   * 
   * This parameter is required.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {
   *       "User": "Jane"
   * }
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The OSS bucket in which you want to store the output image.
   * 
   * Specify the value in the oss://${bucketname}/${objectname} format. ${bucketname} specifies the name of the OSS bucket that resides in the same region as the current project. ${objectname} specifies the path to the output image.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/outputImage.jpg
   */
  targetURI?: string;
  /**
   * @remarks
   * The user data, which is returned as asynchronous notifications to help manage notifications within your system. The maximum length of the user data is 2,048 bytes.
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

