// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewDatasetVersionResponseBodyPreviewResult extends $dara.Model {
  /**
   * @remarks
   * Content
   * 
   * @example
   * this is content
   */
  content?: string;
  /**
   * @remarks
   * File name
   * 
   * @example
   * parth/data.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The MIME type
   * 
   * @example
   * text/plain
   */
  mimeType?: string;
  /**
   * @remarks
   * Preview availability
   * 
   * @example
   * true
   */
  supportPreview?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      mimeType: 'MimeType',
      supportPreview: 'SupportPreview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      mimeType: 'string',
      supportPreview: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDatasetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Preview results
   */
  previewResult?: PreviewDatasetVersionResponseBodyPreviewResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A6C6B486-E3A2-5D52-9E76-D9380485DXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      previewResult: 'PreviewResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewResult: PreviewDatasetVersionResponseBodyPreviewResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.previewResult && typeof (this.previewResult as any).validate === 'function') {
      (this.previewResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

