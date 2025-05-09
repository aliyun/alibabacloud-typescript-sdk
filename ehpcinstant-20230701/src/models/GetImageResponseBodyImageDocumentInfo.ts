// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyImageDocumentInfo extends $dara.Model {
  document?: string;
  documentId?: string;
  encodingMode?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      documentId: 'DocumentId',
      encodingMode: 'EncodingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      documentId: 'string',
      encodingMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

