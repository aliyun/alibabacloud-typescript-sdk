// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentDetailItem } from "./DocumentDetailItem";


export class DetailDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: DocumentDetailItem;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DocumentDetailItem,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

