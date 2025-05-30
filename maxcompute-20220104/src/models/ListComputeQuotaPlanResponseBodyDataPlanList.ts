// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComputeQuotaPlanResponseBodyDataPlanListQuota } from "./ListComputeQuotaPlanResponseBodyDataPlanListQuota";


export class ListComputeQuotaPlanResponseBodyDataPlanList extends $dara.Model {
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 1731394621890
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The details of the quota.
   */
  quota?: ListComputeQuotaPlanResponseBodyDataPlanListQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      quota: ListComputeQuotaPlanResponseBodyDataPlanListQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

