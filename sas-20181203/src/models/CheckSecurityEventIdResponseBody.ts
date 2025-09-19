// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSecurityEventIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alert events are generated on the server. Valid values:
   * 
   * *   **true**
   * *   **false**: no
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C8E67FE
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

