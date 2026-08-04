// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { QuotaConfig } from "./QuotaConfig";


export class UpdateQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the resource quota.
   * 
   * @example
   * this is a test quota
   */
  description?: string;
  /**
   * @remarks
   * The list of user-defined labels. This is a full update.
   */
  labels?: Label[];
  propagateDefaultGPUDriver?: boolean;
  /**
   * @remarks
   * The queuing strategy for jobs in the quota.
   * 
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  /**
   * @remarks
   * The resource quota configuration.
   * 
   * **if can be null:**
   * true
   */
  quotaConfig?: QuotaConfig;
  /**
   * @remarks
   * The resource quota name.
   * 
   * @example
   * test
   */
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      propagateDefaultGPUDriver: 'PropagateDefaultGPUDriver',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      propagateDefaultGPUDriver: 'boolean',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

