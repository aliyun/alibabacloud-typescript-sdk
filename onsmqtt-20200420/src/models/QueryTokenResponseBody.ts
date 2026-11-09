// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * 5C8AADD0-6A95-436D-AFA0-3405CCE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the queried token. Valid values:
   * 
   * *   **true**: indicates the token is valid.
   * *   **false**: indicates the token is invalid.
   * 
   * @example
   * true
   */
  tokenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tokenStatus: 'TokenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tokenStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

