// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentSplitRequestDocument extends $dara.Model {
  content?: string;
  contentEncoding?: string;
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentEncoding: 'content_encoding',
      contentType: 'content_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentEncoding: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

