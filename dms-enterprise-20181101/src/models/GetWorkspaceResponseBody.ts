// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 12345****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region to which the workspace belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service account.
   * 
   * @example
   * 12345****
   */
  serviceAccountId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3322****
   */
  tid?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 863020290155****
   */
  workspaceId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspace_xxx
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      serviceAccountId: 'ServiceAccountId',
      tid: 'Tid',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ownerId: 'string',
      regionId: 'string',
      serviceAccountId: 'string',
      tid: 'number',
      vpcId: 'string',
      workspaceId: 'number',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetWorkspaceResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWorkspaceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

