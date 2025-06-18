// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { QuotaConfig } from "./QuotaConfig";


export class UpdateQuotaRequest extends $dara.Model {
  /**
   * @example
   * this is a test quota
   */
  description?: string;
  labels?: Label[];
  queueStrategy?: string;
  /**
   * **if can be null:**
   * true
   */
  quotaConfig?: QuotaConfig;
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
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

