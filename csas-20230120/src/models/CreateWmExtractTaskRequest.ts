// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWmExtractTaskRequestCsvControl } from "./CreateWmExtractTaskRequestCsvControl";


export class CreateWmExtractTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The CSV watermark control parameter. You must keep the value of this parameter consistent for watermark embedding and watermark extraction. Otherwise, the extraction fails.
   */
  csvControl?: CreateWmExtractTaskRequestCsvControl;
  /**
   * @remarks
   * The document watermark parameter that specifies whether the file to be extracted is a screenshot of a document with a background watermark added. The system determines whether to use the extraction logic for document background watermarks based on whether the file to be extracted is an image file. By default, you do not need to configure this parameter. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  documentIsCapture?: boolean;
  /**
   * @remarks
   * The URL used to download the file to be extracted. The URL must be accessible over the Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/test-****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the file to be extracted. The system needs to check the file type based on the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * test-****.pdf
   */
  filename?: string;
  isClientEmbed?: boolean;
  /**
   * @remarks
   * The watermark parameter for videos that specifies whether to use the long video watermark SDK. Default value: false. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @remarks
   * The watermark parameter for long videos that specifies the video speed factor. The value can be a floating-point number or a string. Default value: 1. This parameter indicates the speed at which a watermark is added or the time-stretching rate for videos after a watermark is added.
   * 
   * @example
   * 1
   */
  videoSpeed?: string;
  /**
   * @remarks
   * The watermark information size. Default value: 32. You must keep the value of this parameter consistent for watermark embedding and watermark extraction. For example, if a 40-bit watermark is used for watermark embedding, you must set this parameter to 40 for watermark extraction.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * The watermark type. Valid values:
   * 
   * *   **PureWebappInvisible**: web page watermark
   * *   **PureAppInvisible**: app watermark
   * *   **PureScreenInvisible**: screen watermark
   * *   **PureDocument**: document watermark
   * *   **PureImage**: image watermark
   * *   **PureAudio**: audio watermark
   * *   **PureVideo**: video watermark
   * *   **AigcWebappInvisible**: artificial intelligence generated content (AIGC)-based webpage watermark
   * *   **AigcAppInvisible**: AIGC-based app watermark
   * *   **AigcScreenInvisible**: AIGC-based screen watermark
   * *   **AigcDocument**: AIGC-based document watermark
   * *   **AigcImage**: AIGC-based image watermark
   * *   **AigcAudio**: AIGC-based audio watermark
   * *   **AigcVideo**: AIGC-based video watermark
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

