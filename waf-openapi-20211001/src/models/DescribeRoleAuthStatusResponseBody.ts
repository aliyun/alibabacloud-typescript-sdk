// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoleAuthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service-linked role for WAF is authorized.
   * 
   * - **true**: The service-linked role is authorized.
   * 
   * - **false**: The service-linked role is not authorized.
   * 
   * @example
   * true
   */
  authStatus?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79ECBB08-079C-57C5-A676-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'boolean',
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

