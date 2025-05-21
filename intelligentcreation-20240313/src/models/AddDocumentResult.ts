// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentInfo } from "./DocumentInfo";


export class AddDocumentResult extends $dara.Model {
  /**
   * @example
   * example.pdf
   */
  docName?: string;
  documentInfo?: DocumentInfo;
  /**
   * @example
   * true
   */
  errorMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      docName: 'docName',
      documentInfo: 'documentInfo',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      documentInfo: DocumentInfo,
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.documentInfo && typeof (this.documentInfo as any).validate === 'function') {
      (this.documentInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

