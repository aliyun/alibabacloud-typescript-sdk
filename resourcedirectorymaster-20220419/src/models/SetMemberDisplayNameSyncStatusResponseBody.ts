// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetMemberDisplayNameSyncStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the Member Display Name Synchronization feature. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  memberAccountDisplayNameSyncStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      memberAccountDisplayNameSyncStatus: 'MemberAccountDisplayNameSyncStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberAccountDisplayNameSyncStatus: 'string',
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

