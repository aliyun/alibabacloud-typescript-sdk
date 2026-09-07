// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsResponseBodyGroupsAttachedLoginPolicy extends $dara.Model {
  name?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroups extends $dara.Model {
  attachedLoginPolicy?: DescribeGroupsResponseBodyGroupsAttachedLoginPolicy;
  /**
   * @remarks
   * The list of assigned resources.
   */
  authedResources?: { [key: string]: string };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-08-07T13:40:40+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * A test group.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether download requires approval.
   */
  downloadNeedApproval?: boolean;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * ug-2412ojkwtybd****
   */
  groupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * TestGroup
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether file approval is enabled.
   * 
   * @example
   * false
   */
  transferFileNeedApproval?: boolean;
  /**
   * @remarks
   * Indicates whether upload requires approval.
   */
  uploadNeedApproval?: boolean;
  /**
   * @remarks
   * The number of members in the user group.
   * 
   * @example
   * 20
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      attachedLoginPolicy: 'AttachedLoginPolicy',
      authedResources: 'AuthedResources',
      createTime: 'CreateTime',
      description: 'Description',
      downloadNeedApproval: 'DownloadNeedApproval',
      groupId: 'GroupId',
      groupName: 'GroupName',
      transferFileNeedApproval: 'TransferFileNeedApproval',
      uploadNeedApproval: 'UploadNeedApproval',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedLoginPolicy: DescribeGroupsResponseBodyGroupsAttachedLoginPolicy,
      authedResources: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      downloadNeedApproval: 'boolean',
      groupId: 'string',
      groupName: 'string',
      transferFileNeedApproval: 'boolean',
      uploadNeedApproval: 'boolean',
      userCount: 'number',
    };
  }

  validate() {
    if(this.attachedLoginPolicy && typeof (this.attachedLoginPolicy as any).validate === 'function') {
      (this.attachedLoginPolicy as any).validate();
    }
    if(this.authedResources) {
      $dara.Model.validateMap(this.authedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned in the query result.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of user groups.
   */
  groups?: DescribeGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groups: 'Groups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groups: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

