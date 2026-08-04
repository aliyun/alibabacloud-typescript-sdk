// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class GetResourceGroupResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the resource group belongs.
   * 
   * @example
   * cb2c7bde30b774e46a329c
   */
  clusterID?: string;
  /**
   * @remarks
   * The provider of computing resources for the resource group.
   * 
   * @example
   * ECS
   */
  computingResourceProvider?: string;
  /**
   * @remarks
   * The ID of the user who created the resource group.
   * 
   * @example
   * 1612285282502324
   */
  creatorID?: string;
  /**
   * @remarks
   * The description of the resource group.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the resource group was last modified.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * TestResourceGroup
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  /**
   * @remarks
   * The type of computing resource for the resource group.
   * 
   * @example
   * Ecs
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the resource group.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the resource group supports RDMA.
   * 
   * @example
   * true
   */
  supportRDMA?: boolean;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: GetResourceGroupResponseBodyTags[];
  /**
   * @remarks
   * The details of the VPC connected to the resource group.
   */
  userVpc?: UserVpc;
  version?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 35201
   */
  workspaceID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'ClusterID',
      computingResourceProvider: 'ComputingResourceProvider',
      creatorID: 'CreatorID',
      description: 'Description',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      status: 'Status',
      supportRDMA: 'SupportRDMA',
      tags: 'Tags',
      userVpc: 'UserVpc',
      version: 'Version',
      workspaceID: 'WorkspaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
      computingResourceProvider: 'string',
      creatorID: 'string',
      description: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      resourceType: 'string',
      status: 'string',
      supportRDMA: 'boolean',
      tags: { 'type': 'array', 'itemType': GetResourceGroupResponseBodyTags },
      userVpc: UserVpc,
      version: 'string',
      workspaceID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

