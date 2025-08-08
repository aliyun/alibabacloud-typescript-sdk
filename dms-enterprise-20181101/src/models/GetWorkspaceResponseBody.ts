// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @example
   * Test
   */
  description?: string;
  /**
   * @example
   * 12345****
   */
  ownerId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 12345****
   */
  serviceAccountId?: string;
  /**
   * @example
   * 3322****
   */
  tid?: number;
  /**
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  /**
   * @example
   * 863020290155****
   */
  workspaceId?: number;
  /**
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
  data?: GetWorkspaceResponseBodyData;
  /**
   * @example
   * UnknownError
   */
  message?: string;
  /**
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF****
   */
  requestId?: string;
  /**
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

