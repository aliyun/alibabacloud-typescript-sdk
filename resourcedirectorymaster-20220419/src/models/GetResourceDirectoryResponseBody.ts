// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceDirectoryResponseBodyResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The status of the Control Policy feature. Valid values:
   * 
   * - Enabled: The feature is enabled.
   * - PendingEnable: The feature is being enabled.
   * - Disabled: The feature is disabled.
   * - PendingDisable: The feature is being disabled.
   * 
   * @example
   * Enabled
   */
  controlPolicyStatus?: string;
  /**
   * @remarks
   * The time when the resource directory was enabled.
   * 
   * @example
   * 2019-02-18T15:32:10.473Z
   */
  createTime?: string;
  /**
   * @remarks
   * The real-name verification information.
   * 
   * @example
   * *** Co., Ltd.
   */
  identityInformation?: string;
  /**
   * @remarks
   * The ID of the management account.
   * 
   * @example
   * 172845045600****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account.
   * 
   * @example
   * aliyun-admin
   */
  masterAccountName?: string;
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
   * The status of the member deletion feature. Valid values:
   * 
   * - Enabled: The feature is enabled. You can call the [DeleteAccount](~~DeleteAccount~~) operation to delete members of the resource account type.
   * - Disabled: The feature is disabled. You cannot delete members of the resource account type.
   * 
   * @example
   * Enabled
   */
  memberDeletionStatus?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-St****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The ID of the Root folder.
   * 
   * @example
   * r-Zo****
   */
  rootFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicyStatus: 'ControlPolicyStatus',
      createTime: 'CreateTime',
      identityInformation: 'IdentityInformation',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      memberAccountDisplayNameSyncStatus: 'MemberAccountDisplayNameSyncStatus',
      memberDeletionStatus: 'MemberDeletionStatus',
      resourceDirectoryId: 'ResourceDirectoryId',
      rootFolderId: 'RootFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyStatus: 'string',
      createTime: 'string',
      identityInformation: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      memberAccountDisplayNameSyncStatus: 'string',
      memberDeletionStatus: 'string',
      resourceDirectoryId: 'string',
      rootFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource directory.
   */
  resourceDirectory?: GetResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: GetResourceDirectoryResponseBodyResourceDirectory,
    };
  }

  validate() {
    if(this.resourceDirectory && typeof (this.resourceDirectory as any).validate === 'function') {
      (this.resourceDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

