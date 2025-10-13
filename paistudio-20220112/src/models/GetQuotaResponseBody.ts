// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ResourceSpec } from "./ResourceSpec";
import { QuotaConfig } from "./QuotaConfig";
import { QuotaDetails } from "./QuotaDetails";
import { QuotaIdName } from "./QuotaIdName";
import { WorkspaceIdName } from "./WorkspaceIdName";


export class GetQuotaResponseBody extends $dara.Model {
  /**
   * @example
   * ByNodeSpec
   */
  allocateStrategy?: string;
  /**
   * @example
   * 18846926616
   */
  creatorId?: string;
  /**
   * @example
   * this is a test quota
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
  hyperZones?: string[];
  labels?: Label[];
  /**
   * @example
   * operation1234
   */
  latestOperationId?: string;
  min?: ResourceSpec;
  /**
   * @example
   * quota1ci8g793pgm
   */
  parentQuotaId?: string;
  /**
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  quotaConfig?: QuotaConfig;
  quotaDetails?: QuotaDetails;
  /**
   * @remarks
   * Quota Id
   * 
   * @example
   * quotajradxh43rgb
   */
  quotaId?: string;
  /**
   * @example
   * test-quota
   */
  quotaName?: string;
  /**
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  resourceGroupIds?: string[];
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  subQuotas?: QuotaIdName[];
  /**
   * @example
   * 1.0
   */
  version?: string;
  workspaces?: WorkspaceIdName[];
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperZones: 'HyperZones',
      labels: 'Labels',
      latestOperationId: 'LatestOperationId',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
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
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      hyperZones: { 'type': 'array', 'itemType': 'string' },
      labels: { 'type': 'array', 'itemType': Label },
      latestOperationId: 'string',
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
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

