// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceSpec } from "./ResourceSpec";


export class ScaleQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Scaling Min Quota.
   * >Notice: NodeSpecs specifies the post-scaling specifications and quantity. If the Count in NodeSpecs is less than the current Quota\\"s Count, it indicates scale-in. Otherwise, it indicates scale-out.
   */
  min?: ResourceSpec;
  /**
   * @remarks
   * Resource group IDs.
   */
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: ResourceSpec,
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.min && typeof (this.min as any).validate === 'function') {
      (this.min as any).validate();
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

