// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetMemberDeletionPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 151266687691****
   */
  managementAccountId?: string;
  /**
   * @remarks
   * The status of the member deletion feature. Valid values:
   * 
   * *   Enabled: The feature is enabled.
   * *   Disabled: The feature is disabled.
   * 
   * @example
   * Enabled
   */
  memberDeletionStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C55A4CAA-9039-1DDF-91CE-FCC134513D29
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-3G****
   */
  resourceDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      managementAccountId: 'ManagementAccountId',
      memberDeletionStatus: 'MemberDeletionStatus',
      requestId: 'RequestId',
      resourceDirectoryId: 'ResourceDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managementAccountId: 'string',
      memberDeletionStatus: 'string',
      requestId: 'string',
      resourceDirectoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

