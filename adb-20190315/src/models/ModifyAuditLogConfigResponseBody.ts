// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the status of the SQL audit feature is updated. Valid values:
   * 
   * - **true**: The status is updated.
   * 
   * - **false**: The status failed to be updated.
   * 
   * @example
   * true
   */
  updateSucceed?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateSucceed: 'UpdateSucceed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateSucceed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

