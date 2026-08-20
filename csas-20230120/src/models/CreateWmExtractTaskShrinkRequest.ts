// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmExtractTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The CSV watermark control parameters. These must be consistent with the parameters used during embedding. Otherwise, extraction fails.
   */
  csvControlShrink?: string;
  /**
   * @remarks
   * The document watermark parameter that specifies whether the file to be extracted is a screenshot of a document with a background watermark. The service determines whether to use the document background watermark extraction logic based on whether the file is an image file. Therefore, this parameter does not need to be set by default. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  documentIsCapture?: boolean;
  /**
   * @remarks
   * The URL used to download the file from which the watermark is to be fetched. The URL must be accessible over the public network access.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/test-****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the file from which the watermark is to be extracted. The backend determines and validates the file type based on the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @remarks
   * The image extraction parameters.
   */
  imageExtractParamsOpenApiShrink?: string;
  /**
   * @remarks
   * The audio watermark parameter that specifies whether the watermark was embedded by the client SDK. Default value: false. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  isClientEmbed?: boolean;
  /**
   * @remarks
   * The video watermark parameter that specifies whether to use the long video watermark SDK. Default value: false. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @remarks
   * The long video watermark parameter that specifies the video playback speed as a floating-point string. Default value: 1, which indicates the playback speed used when the watermark was added, or the speed at which the video timeline was stretched after the watermark was added.
   * 
   * @example
   * 1
   */
  videoSpeed?: string;
  /**
   * @remarks
   * The bit width of the watermark information capacity. Default value: 32. This parameter must be consistent between embedding and extraction. For example, if the 40-bit SDK was used for embedding, set this value to 40 for extraction.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * The watermark type. Valid values:
   * - **PureWebappInvisible**: web page watermark.
   * - **PureAppInvisible**: app watermark.
   * - **PureScreenInvisible**: screen watermark.
   * - **PureDocument**: document watermark.
   * - **PureImage**: image watermark.
   * - **PureAudio**: audio watermark.
   * - **PureVideo**: video watermark.
   * - **AigcWebappInvisible**: AIGC web page watermark.
   * - **AigcAppInvisible**: AIGC app watermark.
   * - **AigcScreenInvisible**: AIGC screen watermark.
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
      csvControlShrink: 'CsvControl',
      documentIsCapture: 'DocumentIsCapture',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageExtractParamsOpenApiShrink: 'ImageExtractParamsOpenApi',
      isClientEmbed: 'IsClientEmbed',
      videoIsLong: 'VideoIsLong',
      videoSpeed: 'VideoSpeed',
      wmInfoSize: 'WmInfoSize',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvControlShrink: 'string',
      documentIsCapture: 'boolean',
      fileUrl: 'string',
      filename: 'string',
      imageExtractParamsOpenApiShrink: 'string',
      isClientEmbed: 'boolean',
      videoIsLong: 'boolean',
      videoSpeed: 'string',
      wmInfoSize: 'number',
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

