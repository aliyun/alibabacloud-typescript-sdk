// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the key. Unit: seconds.
   * 
   * @example
   * 3600
   */
  expirationTtl?: string;
  /**
   * @remarks
   * The expiration time of the key. Unit: seconds.
   * 
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The value of the key. The value of the root node.
   * 
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

