// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SubmitConvertPdfToWordJobAdvanceRequest extends $dara.Model {
  enableEventCallback?: boolean;
  /**
   * @example
   * covertPdfToWord.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  forceExportInnerImage?: boolean;
  formulaEnhancement?: boolean;
  option?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      enableEventCallback: 'EnableEventCallback',
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      formulaEnhancement: 'FormulaEnhancement',
      option: 'Option',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventCallback: 'boolean',
      fileName: 'string',
      fileUrlObject: 'Readable',
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

