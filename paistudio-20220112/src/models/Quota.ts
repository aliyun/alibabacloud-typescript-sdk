// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ResourceSpec } from "./ResourceSpec";
import { QuotaCluster } from "./QuotaCluster";
import { QuotaConfig } from "./QuotaConfig";
import { QuotaDetails } from "./QuotaDetails";
import { QuotaIdName } from "./QuotaIdName";
import { WorkspaceIdName } from "./WorkspaceIdName";


export class Quota extends $dara.Model {
  /**
   * @remarks
   * The resource allocation strategy. Currently, only ByNodeSpecs is supported.
   * 
   * @example
   * ByNodeSpec
   */
  allocateStrategy?: string;
  /**
   * @remarks
   * The ID of the resource quota creator.
   * 
   * @example
   * 1884692****
   */
  creatorId?: string;
  /**
   * @remarks
   * The resource quota description.
   * 
   * @example
   * this is a test quota
   */
  description?: string;
  /**
   * @remarks
   * The GPU type.
   */
  GPUType?: string;
  /**
   * @remarks
   * The time when the resource quota was created.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the resource quota was last modified.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  hyperZones?: string[];
  /**
   * @remarks
   * The resource quota labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The ID of the latest operation on the resource quota.
   * 
   * @example
   * operation****
   */
  latestOperationId?: string;
  /**
   * @remarks
   * The guaranteed resources.
   */
  min?: ResourceSpec;
  /**
   * @remarks
   * The parent resource quota ID.
   * 
   * @example
   * ""
   */
  parentQuotaId?: string;
  /**
   * @remarks
   * The queue policy for the quota. Valid values:
   * - PaiStrategyIntelligent: intelligent policies.
   * - PaiStrategyBalance: balanced policy.
   * - PaiStrategyRoundRobin: resource-priority policy.
   * - PaiStrategyStrictFIFO: FIFO policy.
   * 
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  quotaCluster?: QuotaCluster;
  /**
   * @remarks
   * The resource quota configuration.
   */
  quotaConfig?: QuotaConfig;
  /**
   * @remarks
   * The resource quota details.
   */
  quotaDetails?: QuotaDetails;
  /**
   * @remarks
   * The resource quota ID.
   * 
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @remarks
   * The resource quota name.
   * 
   * @example
   * dlc-quota
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
   * The list of resource groups.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * - Lingjun
   * - ECS (default)
   * - ACS
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource quota status.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The list of sub-quotas under the resource quota.
   */
  subQuotas?: QuotaIdName[];
  /**
   * @remarks
   * The version.
   */
  version?: string;
  /**
   * @remarks
   * The workspaces associated with the resource quota.
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

