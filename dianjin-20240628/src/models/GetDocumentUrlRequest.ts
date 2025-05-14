// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12681367362
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

