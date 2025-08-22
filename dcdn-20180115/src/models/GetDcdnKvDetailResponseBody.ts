// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDcdnKvDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  expirationTtl?: string;
  /**
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @example
   * test
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

