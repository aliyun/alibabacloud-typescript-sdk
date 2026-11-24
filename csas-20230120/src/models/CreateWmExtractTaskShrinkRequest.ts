// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmExtractTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * CSV watermark control parameters. These parameters must be consistent with those used during embedding. Otherwise, the extraction fails.
   */
  csvControlShrink?: string;
  /**
   * @remarks
   * Document watermark parameter. Specifies whether the file from which the watermark is to be extracted is a screenshot of a document with a background watermark. The service determines whether to use the document background watermark extraction logic based on whether the file is an image file. Therefore, you do not need to set this parameter by default. Valid values:
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
   * The URL used to download the file to be fetched. The URL must support public network access.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/test-****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the file from which the watermark is to be extracted. The backend determines and verifies the file type based on the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @remarks
   * Image extraction parameters.
   */
  imageExtractParamsOpenApiShrink?: string;
  /**
   * @remarks
   * Audio watermark parameter. Specifies whether the watermark is embedded by using the client SDK. Default value: false. Valid values:
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
   * Video watermark parameter. Specifies whether to use the long video watermark SDK. Default value: false. Valid values:
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
   * Long video watermark parameter. The video playback speed, represented as a floating-point string. Default value: 1. This value represents the playback speed used when adding the watermark, or the timeline stretching speed after the watermark is added.
   * 
   * @example
   * 1
   */
  videoSpeed?: string;
  /**
   * @remarks
   * The bit width of the watermark information capacity. Default value: 32. This parameter must be consistent during embedding and extraction. For example, if a 40-bit SDK is used for embedding, you must also set this value to 40 for extraction.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * The watermark type. Valid values:
   * - **PureWebappInvisible**: Web page watermark.
   * - **PureAppInvisible**: App watermark.
   * - **PureScreenInvisible**: Screen watermark.
   * - **PureDocument**: Document watermark.
   * - **PureImage**: Image watermark.
   * - **PureAudio**: Audio watermark.
   * - **PureVideo**: Video watermark.
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

