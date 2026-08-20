// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmExtractTaskRequestCsvControl extends $dara.Model {
  /**
   * @remarks
   * The timestamp watermark parameter that specifies how much information a single timestamp can contain. This must be consistent with the corresponding parameter used during embedding. Otherwise, extraction fails.
   * 
   * @example
   * 1
   */
  embedBitsNumberInEachTime?: number;
  /**
   * @remarks
   * The lossy embedding control parameter that specifies the column to modify. This must be consistent with the parameter used during embedding. Otherwise, extraction fails.
   * 
   * @example
   * 1
   */
  embedColumn?: number;
  /**
   * @remarks
   * The lossy embedding control parameter that specifies the modification precision. This must be consistent with the parameter used during embedding. Otherwise, extraction fails.
   * 
   * @example
   * 0
   */
  embedPrecision?: number;
  /**
   * @remarks
   * The timestamp watermark parameter that controls the embedding position of the timestamp watermark. This must be consistent with the corresponding parameter used during embedding. Otherwise, extraction fails.
   * 
   * @example
   * Min
   */
  embedTimePosition?: string;
  /**
   * @remarks
   * The CSV watermark embedding method. This must be consistent with the parameter used during embedding. Otherwise, extraction fails.
   * 
   * @example
   * lossless_row_shift_embed
   */
  method?: string;
  /**
   * @remarks
   * The timestamp watermark parameter that specifies the timestamp format. This must be consistent with the corresponding parameter used during embedding. Otherwise, extraction fails.
   * 
   * @example
   * Year-Mon-Day Hour:Min:Sec.MilSec
   */
  timeFormat?: string;
  static names(): { [key: string]: string } {
    return {
      embedBitsNumberInEachTime: 'EmbedBitsNumberInEachTime',
      embedColumn: 'EmbedColumn',
      embedPrecision: 'EmbedPrecision',
      embedTimePosition: 'EmbedTimePosition',
      method: 'Method',
      timeFormat: 'TimeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedBitsNumberInEachTime: 'number',
      embedColumn: 'number',
      embedPrecision: 'number',
      embedTimePosition: 'string',
      method: 'string',
      timeFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskRequestImageExtractParamsOpenApi extends $dara.Model {
  /**
   * @remarks
   * The base64-encoded original file of the enhanced visible watermark logo. This is used to extract the enhanced visible watermark.
   * 
   * @example
   * iVBORw0KGgoAAAANSUhEUgAAAGQAAAAWCAYAAAA2CDmeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNS0yN1QyMjo1MToyMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDUtMjdUMjM6NDQ6MzcrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDUtMjdUMjM6NDQ6MzcrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmRiYTA3MjM3LWJmNWUtNTc0ZS04ZDhlLTAyNDlmNDFlNWE2ZCIgeG1wTU06RG9jdW1lbnRJRD0i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
   */
  srcLogoBase64?: string;
  static names(): { [key: string]: string } {
    return {
      srcLogoBase64: 'SrcLogoBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcLogoBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The CSV watermark control parameters. These must be consistent with the parameters used during embedding. Otherwise, extraction fails.
   */
  csvControl?: CreateWmExtractTaskRequestCsvControl;
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
  imageExtractParamsOpenApi?: CreateWmExtractTaskRequestImageExtractParamsOpenApi;
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
      csvControl: 'CsvControl',
      documentIsCapture: 'DocumentIsCapture',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageExtractParamsOpenApi: 'ImageExtractParamsOpenApi',
      isClientEmbed: 'IsClientEmbed',
      videoIsLong: 'VideoIsLong',
      videoSpeed: 'VideoSpeed',
      wmInfoSize: 'WmInfoSize',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvControl: CreateWmExtractTaskRequestCsvControl,
      documentIsCapture: 'boolean',
      fileUrl: 'string',
      filename: 'string',
      imageExtractParamsOpenApi: CreateWmExtractTaskRequestImageExtractParamsOpenApi,
      isClientEmbed: 'boolean',
      videoIsLong: 'boolean',
      videoSpeed: 'string',
      wmInfoSize: 'number',
      wmType: 'string',
    };
  }

  validate() {
    if(this.csvControl && typeof (this.csvControl as any).validate === 'function') {
      (this.csvControl as any).validate();
    }
    if(this.imageExtractParamsOpenApi && typeof (this.imageExtractParamsOpenApi as any).validate === 'function') {
      (this.imageExtractParamsOpenApi as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

