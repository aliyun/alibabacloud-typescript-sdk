// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 88EDA98E-6BE7-55DA-9EB6-B6444B882C59
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
      data: 'boolean',
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

