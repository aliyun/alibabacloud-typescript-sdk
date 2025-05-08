// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TranslateCertificateResponseBodyData } from "./TranslateCertificateResponseBodyData";


export class TranslateCertificateResponseBody extends $dara.Model {
  data?: TranslateCertificateResponseBodyData;
  /**
   * @example
   * 6640DE48-201C-4110-AE87-FB8FA34412B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TranslateCertificateResponseBodyData,
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

