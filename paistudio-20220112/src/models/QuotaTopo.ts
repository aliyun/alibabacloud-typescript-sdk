// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaDetails } from "./QuotaDetails";
import { WorkloadDetails } from "./WorkloadDetails";


export class QuotaTopo extends $dara.Model {
  depth?: string;
  parentQuotaId?: string;
  quotaDetails?: QuotaDetails;
  quotaId?: string;
  quotaName?: string;
  resourceType?: string;
  workloadDetails?: WorkloadDetails;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      parentQuotaId: 'ParentQuotaId',
      quotaDetails: 'QuotaDetails',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      resourceType: 'ResourceType',
      workloadDetails: 'WorkloadDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'string',
      parentQuotaId: 'string',
      quotaDetails: QuotaDetails,
      quotaId: 'string',
      quotaName: 'string',
      resourceType: 'string',
      workloadDetails: WorkloadDetails,
    };
  }

  validate() {
    if(this.quotaDetails && typeof (this.quotaDetails as any).validate === 'function') {
      (this.quotaDetails as any).validate();
    }
    if(this.workloadDetails && typeof (this.workloadDetails as any).validate === 'function') {
      (this.workloadDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

