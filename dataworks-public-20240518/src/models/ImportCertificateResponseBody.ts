// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCertificateResponseBody extends $dara.Model {
  /**
   * @example
   * 676303114031776
   */
  id?: number;
  /**
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF020E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

