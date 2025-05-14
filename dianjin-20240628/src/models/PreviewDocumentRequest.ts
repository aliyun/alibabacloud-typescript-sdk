// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8326472354762354
   */
  documentId?: string;
  static names(): { [key: string]: string } {
    return {
      documentId: 'documentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

