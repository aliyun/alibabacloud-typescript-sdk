// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeVATInvoiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeVATInvoice/RecognizeVATInvoice3.jpg
   */
  fileURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      fileURL: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      fileURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

