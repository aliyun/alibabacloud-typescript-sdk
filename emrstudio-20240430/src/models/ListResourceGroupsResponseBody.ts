// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsResponseBodyDataAssociatedClusterTemplates extends $dara.Model {
  clusterType?: string;
  /**
   * @example
   * 78723f0dc36。
   */
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'clusterType',
      templateId: 'templateId',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyDataAssociatedClusters extends $dara.Model {
  /**
   * @example
   * c-3cd8ba94b36cxxxx
   */
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      clusterName: 'clusterName',
      clusterType: 'clusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyDataAssociatedWorkspaces extends $dara.Model {
  /**
   * @example
   * 1200827。
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
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

export class ListResourceGroupsResponseBodyData extends $dara.Model {
  associatedClusterTemplates?: ListResourceGroupsResponseBodyDataAssociatedClusterTemplates[];
  associatedClusters?: ListResourceGroupsResponseBodyDataAssociatedClusters[];
  associatedWorkspaces?: ListResourceGroupsResponseBodyDataAssociatedWorkspaces[];
  /**
   * @example
   * 2024-09-26T02:10:04Z
   */
  createTime?: string;
  /**
   * @example
   * 2。
   */
  nodeMaxCount?: number;
  /**
   * @example
   * 1。
   */
  nodeMinCount?: number;
  /**
   * @example
   * EMR_W1_SMALL。
   */
  nodeType?: string;
  /**
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @example
   * rg-acfm4ewqrznxxxx
   */
  resourceGroupId?: string;
  resourceGroupName?: string;
  /**
   * @example
   * CLUSTER_RESOURCE_GROUP。
   */
  resourceGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      associatedClusterTemplates: 'associatedClusterTemplates',
      associatedClusters: 'associatedClusters',
      associatedWorkspaces: 'associatedWorkspaces',
      createTime: 'createTime',
      nodeMaxCount: 'nodeMaxCount',
      nodeMinCount: 'nodeMinCount',
      nodeType: 'nodeType',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      resourceGroupName: 'resourceGroupName',
      resourceGroupType: 'resourceGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedClusterTemplates: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyDataAssociatedClusterTemplates },
      associatedClusters: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyDataAssociatedClusters },
      associatedWorkspaces: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyDataAssociatedWorkspaces },
      createTime: 'string',
      nodeMaxCount: 'number',
      nodeMinCount: 'number',
      nodeType: 'string',
      paymentType: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      resourceGroupType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associatedClusterTemplates)) {
      $dara.Model.validateArray(this.associatedClusterTemplates);
    }
    if(Array.isArray(this.associatedClusters)) {
      $dara.Model.validateArray(this.associatedClusters);
    }
    if(Array.isArray(this.associatedWorkspaces)) {
      $dara.Model.validateArray(this.associatedWorkspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $dara.Model {
  data?: ListResourceGroupsResponseBodyData[];
  /**
   * @example
   * 10。
   */
  maxResults?: number;
  /**
   * @example
   * 1。
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

