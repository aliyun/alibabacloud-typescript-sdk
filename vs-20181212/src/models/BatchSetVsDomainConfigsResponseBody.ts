// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetVsDomainConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * 9BEC5E85-C76B-56EF-A922-860EFDB8B64B
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

