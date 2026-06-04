// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewServiceInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * BB58FE53-ED8F-5D12-9746-CD3A5F463D95
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

