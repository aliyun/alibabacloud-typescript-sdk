// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAccessLogAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Anti-DDoS Origin was authorized to access Simple Log Service. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  accessLogAuth?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 864FE2F4-CB2E-4024-B9EF-D59FD08ABD41
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogAuth: 'AccessLogAuth',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogAuth: 'boolean',
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

