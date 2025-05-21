// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentInfo } from "./DocumentInfo";


export class DocumentResult extends $dara.Model {
  documentInfo?: DocumentInfo;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      documentInfo: 'documentInfo',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentInfo: DocumentInfo,
      requestId: 'string',
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

