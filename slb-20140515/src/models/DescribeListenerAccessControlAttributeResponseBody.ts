// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListenerAccessControlAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the whitelist is enabled. Valid values:
   * 
   * *   **open_white_list**: the whitelist is enabled.
   * *   **close**: the whitelist is disabled.
   * 
   * @example
   * open_white_list
   */
  accessControlStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The queried ACLs.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceItems?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlStatus: 'AccessControlStatus',
      requestId: 'RequestId',
      sourceItems: 'SourceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlStatus: 'string',
      requestId: 'string',
      sourceItems: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

