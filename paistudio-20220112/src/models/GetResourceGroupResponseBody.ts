// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class GetResourceGroupResponseBodyTags extends $dara.Model {
  /**
   * @example
   * testKey
   */
  tagKey?: string;
  /**
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
   * @example
   * cb2c7bde30b774e46a329c
   */
  clusterID?: string;
  /**
   * @example
   * ECS
   */
  computingResourceProvider?: string;
  /**
   * @example
   * 1612285282502324
   */
  creatorID?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * TestResourceGroup
   */
  name?: string;
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  /**
   * @example
   * Ecs
   */
  resourceType?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  /**
   * @example
   * true
   */
  supportRDMA?: boolean;
  tags?: GetResourceGroupResponseBodyTags[];
  userVpc?: UserVpc;
  version?: string;
  /**
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

