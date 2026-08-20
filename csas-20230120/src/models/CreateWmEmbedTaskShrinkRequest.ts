// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmEmbedTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The audio control parameters.
   */
  audioControlShrink?: string;
  /**
   * @remarks
   * The CSV watermark embedding control parameters.
   */
  csvControlShrink?: string;
  /**
   * @remarks
   * The document watermark control parameters.
   */
  documentControlShrink?: string;
  /**
   * @remarks
   * The URL for downloading the file to be embedded. The URL must be active for public network access.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the file to be embedded. The backend validates the file type based on the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  /**
   * @remarks
   * The image watermark control parameters.
   */
  imageControlShrink?: string;
  /**
   * @remarks
   * The image watermark parameter that specifies the expected JPEG compression quality factor of the output image. Default value: 95. Valid values: 1 to 100.
   * 
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @remarks
   * The image watermark parameter. A larger value indicates higher robustness but lower visual quality. Default value: 2. Valid values: 0 to 4.
   * 
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @remarks
   * Specifies whether to enable invisible watermark embedding. Default value: true.
   */
  invisibleEnable?: boolean;
  /**
   * @remarks
   * The short video watermark parameter that specifies the video bitrate. By default, the video bitrate is automatically obtained. You can use this parameter to forcibly specify the bitrate used during extraction. Typically, you do not need to set this parameter.
   * 
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @remarks
   * The video control parameters.
   */
  videoControlShrink?: string;
  /**
   * @remarks
   * Video watermark parameter. Specifies whether to use the long video watermark SDK. Valid values:
   * 
   * - **true**: The long video watermark SDK is used.
   * - **false**: The long video watermark SDK is not used.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @remarks
   * The watermark information in Base64-encoded string format. If this parameter is set, WmInfoUint cannot be set.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * The bit width of the watermark information capacity. Default value: 32. This parameter must be consistent between embedding and extraction. For example, if the 40-bit SDK is used for embedding, set this parameter to 40 during extraction as well.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * The watermark information in decimal number format. If this parameter is set, WmInfoBytesB64 cannot be set.
   * 
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * The watermark type. Valid values:
   * - **PureDocument**: document watermark.
   * - **PureImage**: image watermark.
   * - **PureAudio**: audio watermark.
   * - **PureVideo**: video watermark.
   * - **AigcDocument**: AIGC document watermark.
   * - **AigcImage**: AIGC image watermark.
   * - **AigcAudio**: AIGC audio watermark.
   * - **AigcVideo**: AIGC video watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      audioControlShrink: 'AudioControl',
      csvControlShrink: 'CsvControl',
      documentControlShrink: 'DocumentControl',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageControlShrink: 'ImageControl',
      imageEmbedJpegQuality: 'ImageEmbedJpegQuality',
      imageEmbedLevel: 'ImageEmbedLevel',
      invisibleEnable: 'InvisibleEnable',
      videoBitrate: 'VideoBitrate',
      videoControlShrink: 'VideoControl',
      videoIsLong: 'VideoIsLong',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioControlShrink: 'string',
      csvControlShrink: 'string',
      documentControlShrink: 'string',
      fileUrl: 'string',
      filename: 'string',
      imageControlShrink: 'string',
      imageEmbedJpegQuality: 'number',
      imageEmbedLevel: 'number',
      invisibleEnable: 'boolean',
      videoBitrate: 'string',
      videoControlShrink: 'string',
      videoIsLong: 'boolean',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

