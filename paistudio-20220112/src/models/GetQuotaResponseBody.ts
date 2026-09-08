// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ResourceSpec } from "./ResourceSpec";
import { QuotaCluster } from "./QuotaCluster";
import { QuotaConfig } from "./QuotaConfig";
import { QuotaDetails } from "./QuotaDetails";
import { QuotaIdName } from "./QuotaIdName";
import { WorkspaceIdName } from "./WorkspaceIdName";


export class GetQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource allocation strategy.
   * 
   * @example
   * ByNodeSpec
   */
  allocateStrategy?: string;
  /**
   * @remarks
   * The ID of the quota creator.
   * 
   * @example
   * 1884692****
   */
  creatorId?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * this is a test quota
   */
  description?: string;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * L20
   */
  GPUType?: string;
  /**
   * @remarks
   * The time when the quota was created.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the quota was last modified.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The list of high-performance network zones.
   */
  hyperZones?: string[];
  /**
   * @remarks
   * The labels of the quota.
   */
  labels?: Label[];
  /**
   * @remarks
   * The ID of the latest quota operation.
   * 
   * @example
   * operation****
   */
  latestOperationId?: string;
  /**
   * @remarks
   * The minimum quota configuration.
   */
  min?: ResourceSpec;
  /**
   * @remarks
   * The ID of the parent quota.
   * 
   * @example
   * quota1ci8g79****
   */
  parentQuotaId?: string;
  /**
   * @remarks
   * The queuing strategy for tasks in the quota.
   * 
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  /**
   * @remarks
   * The cluster specifications and status composed of resources in the quota.
   */
  quotaCluster?: QuotaCluster;
  /**
   * @remarks
   * The quota configuration:
   * 
   * - VPC information
   * 
   * - Whether RDMA is supported
   * 
   * - ACS configuration (takes effect when the resource type is ACS)
   */
  quotaConfig?: QuotaConfig;
  /**
   * @remarks
   * The details of the quota.
   */
  quotaDetails?: QuotaDetails;
  /**
   * @remarks
   * The resource quota ID.
   * 
   * @example
   * quotajradxh4****
   */
  quotaId?: string;
  /**
   * @remarks
   * The name of the resource quota.
   * 
   * @example
   * test-quota
   */
  quotaName?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @remarks
   * The error reason.
   * 
   * @example
   * “”
   */
  reasonMessage?: string;
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
   * The resource group information associated with the resource quota.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The resource type of the quota.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the quota.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The list of sub-quotas under the quota.
   */
  subQuotas?: QuotaIdName[];
  /**
   * @remarks
   * The version information. Takes effect when the resource type is ECS.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The workspaces associated with the quota.
   */
  workspaces?: WorkspaceIdName[];
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      creatorId: 'CreatorId',
      description: 'Description',
      GPUType: 'GPUType',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperZones: 'HyperZones',
      labels: 'Labels',
      latestOperationId: 'LatestOperationId',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaCluster: 'QuotaCluster',
      quotaConfig: 'QuotaConfig',
      quotaDetails: 'QuotaDetails',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
      status: 'Status',
      subQuotas: 'SubQuotas',
      version: 'Version',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      creatorId: 'string',
      description: 'string',
      GPUType: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      hyperZones: { 'type': 'array', 'itemType': 'string' },
      labels: { 'type': 'array', 'itemType': Label },
      latestOperationId: 'string',
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaCluster: QuotaCluster,
      quotaConfig: QuotaConfig,
      quotaDetails: QuotaDetails,
      quotaId: 'string',
      quotaName: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      status: 'string',
      subQuotas: { 'type': 'array', 'itemType': QuotaIdName },
      version: 'string',
      workspaces: { 'type': 'array', 'itemType': WorkspaceIdName },
    };
  }

  validate() {
    if(Array.isArray(this.hyperZones)) {
      $dara.Model.validateArray(this.hyperZones);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.min && typeof (this.min as any).validate === 'function') {
      (this.min as any).validate();
    }
    if(this.quotaCluster && typeof (this.quotaCluster as any).validate === 'function') {
      (this.quotaCluster as any).validate();
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    if(this.quotaDetails && typeof (this.quotaDetails as any).validate === 'function') {
      (this.quotaDetails as any).validate();
    }
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    if(Array.isArray(this.subQuotas)) {
      $dara.Model.validateArray(this.subQuotas);
    }
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

