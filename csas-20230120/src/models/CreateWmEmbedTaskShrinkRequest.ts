// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmEmbedTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Audio control parameters.
   */
  audioControlShrink?: string;
  /**
   * @remarks
   * CSV watermark embedding control parameters.
   */
  csvControlShrink?: string;
  /**
   * @remarks
   * Document watermark control parameters.
   */
  documentControlShrink?: string;
  /**
   * @remarks
   * URL for downloading the file to embed. The URL must support public network access.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The filename of the file to embed. The backend validates the file type based on the filename extension.
   * 
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  /**
   * @remarks
   * Image watermark control parameters.
   */
  imageControlShrink?: string;
  /**
   * @remarks
   * Image watermark parameter: the desired JPEG compression quality factor for the output image. Default value is 95. Valid range: 1 to 100.
   * 
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @remarks
   * Image watermark parameter: A higher value indicates greater robustness but reduced visual quality. Default value: 2. Valid values: 0 to 4.
   * 
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @remarks
   * Specifies whether to enable invisible watermark embedding. Default value: true.  
   * Valid values:  
   * - **true**: Yes  
   * - **false**: No
   */
  invisibleEnable?: boolean;
  /**
   * @remarks
   * Short video watermark parameter: specifies the video bitrate. By default, the video bitrate is automatically retrieved. You can use this parameter to explicitly specify the bitrate used during extraction. This parameter usually does not need to be set.
   * 
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @remarks
   * Video control parameters.
   */
  videoControlShrink?: string;
  /**
   * @remarks
   * Video watermark parameter: whether to use the long-video watermark software development kit (SDK). The default value is false. Valid values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @remarks
   * Base64-encoded string-formatted watermark information. If this value is set, WmInfoUint cannot be set.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * The bit width of the watermark information. The default value is 32. This parameter must be consistent between embedding and extraction. For example, if a 40-bit software development kit (SDK) is used for embedding, this value must also be set to 40 during extraction.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * Watermark information in decimal numeric format. If this parameter is set, WmInfoBytesB64 cannot be set.  
   * 
   * The valid value range depends on the WmInfoSize parameter:  
   * 
   * - When WmInfoSize is 32, the value range is 1 to 4294967295.  
   * 
   * - When WmInfoSize is 40, the value range is 1 to 1099511627775.  
   * 
   * - When WmInfoSize is 64, the value range is 1 to 18446744073709551615.
   * 
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * Watermark type. Valid values:  
   * - **PureDocument**: Document watermark.  
   * - **PureImage**: Image watermark.  
   * - **PureAudio**: Audio watermark.  
   * - **PureVideo**: Video watermark.  
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

