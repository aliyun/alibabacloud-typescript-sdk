// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceDirectoryResponseBodyResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The status of the control policy. Valid values:
   * 
   * - Enabled: Enabled.
   * - PendingEnable: Being enabled.
   * - Disabled: Disabled.
   * - PendingDisable: Being disabled.
   * 
   * @example
   * Enabled
   */
  controlPolicyStatus?: string;
  /**
   * @remarks
   * The time when the resource directory was created. The time is displayed in UTC in RFC 3339 format, indicated by Z.
   * 
   * @example
   * 2019-02-18T15:32:10.473Z
   */
  createTime?: string;
  /**
   * @remarks
   * The real-name verification information of the member.
   * 
   * @example
   * ***有限公司
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
   * Indicates whether member deletion is enabled. Valid values:
   * - Enabled: Enabled. You can call [DeleteAccount](https://help.aliyun.com/document_detail/311546.html) to delete members of the resource account type.
   * - Disabled: Disabled. You cannot delete members of the resource account type.
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
   * The request ID.
   * 
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
   */
  requestId?: string;
  /**
   * @remarks
   * The resource directory information.
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

