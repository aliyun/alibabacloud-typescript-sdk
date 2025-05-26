// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtractDocumentTextResponseBody extends $dara.Model {
  documentText?: string;
  /**
   * @example
   * 94D6F994-E298-037E-8E8B-0090F27*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      documentText: 'DocumentText',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentText: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

