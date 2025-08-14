// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitConvertPdfToWordJobRequest extends $dara.Model {
  /**
   * @example
   * covertPdfToWord.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  forceExportInnerImage?: boolean;
  formulaEnhancement?: boolean;
  option?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      formulaEnhancement: 'FormulaEnhancement',
      option: 'Option',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      forceExportInnerImage: 'boolean',
      formulaEnhancement: 'boolean',
      option: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

