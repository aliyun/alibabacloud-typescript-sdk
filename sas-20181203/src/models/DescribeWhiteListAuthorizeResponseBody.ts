// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListAuthorizeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available quota.
   * 
   * @example
   * 3
   */
  availableAuthorizeNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAuthorizeNum: 'AvailableAuthorizeNum',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAuthorizeNum: 'number',
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

