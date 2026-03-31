// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsLogStoreStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a Logstore is created for WAF. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  existStatus?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 184F538F-C115-5C89-A4EF-C79CD2E29AC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      existStatus: 'ExistStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existStatus: 'boolean',
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

