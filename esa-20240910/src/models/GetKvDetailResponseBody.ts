// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  expirationTtl?: string;
  /**
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @example
   * test_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expirationTtl: 'ExpirationTtl',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationTtl: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

