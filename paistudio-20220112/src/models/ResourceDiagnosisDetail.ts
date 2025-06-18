// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class ResourceDiagnosisDetail extends $dara.Model {
  exceedResources?: string[];
  limit?: ResourceAmount;
  status?: string;
  used?: ResourceAmount;
  workloadIds?: string[];
  static names(): { [key: string]: string } {
    return {
      exceedResources: 'ExceedResources',
      limit: 'Limit',
      status: 'Status',
      used: 'Used',
      workloadIds: 'WorkloadIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceedResources: { 'type': 'array', 'itemType': 'string' },
      limit: ResourceAmount,
      status: 'string',
      used: ResourceAmount,
      workloadIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.exceedResources)) {
      $dara.Model.validateArray(this.exceedResources);
    }
    if(this.limit && typeof (this.limit as any).validate === 'function') {
      (this.limit as any).validate();
    }
    if(this.used && typeof (this.used as any).validate === 'function') {
      (this.used as any).validate();
    }
    if(Array.isArray(this.workloadIds)) {
      $dara.Model.validateArray(this.workloadIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

