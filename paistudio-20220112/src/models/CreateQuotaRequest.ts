// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ResourceSpec } from "./ResourceSpec";
import { QuotaConfig } from "./QuotaConfig";


export class CreateQuotaRequest extends $dara.Model {
  /**
   * @example
   * ByNodeSpecs
   */
  allocateStrategy?: string;
  /**
   * @example
   * this is a test quota
   */
  description?: string;
  labels?: Label[];
  min?: ResourceSpec;
  /**
   * @example
   * quota1ci8g793pgm
   */
  parentQuotaId?: string;
  /**
   * @example
   * PaiStrategyIntelligent
   * 
   * **if can be null:**
   * true
   */
  queueStrategy?: string;
  quotaConfig?: QuotaConfig;
  /**
   * @example
   * test-quota
   */
  quotaName?: string;
  resourceGroupIds?: string[];
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      description: 'Description',
      labels: 'Labels',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaName: 'QuotaName',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaName: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.min && typeof (this.min as any).validate === 'function') {
      (this.min as any).validate();
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

