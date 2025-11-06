// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchDomainRemarkResponseBody extends $dara.Model {
  /**
   * @example
   * 4189E320-961E-4786-8E15-0000
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

