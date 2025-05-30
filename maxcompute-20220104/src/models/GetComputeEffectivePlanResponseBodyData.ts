// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetComputeEffectivePlanResponseBodyDataQuota } from "./GetComputeEffectivePlanResponseBodyDataQuota";


export class GetComputeEffectivePlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 1714356241163
   */
  createTime?: string;
  /**
   * @remarks
   * Whether it is currently effective.
   * > A Quota plan that has taken effect cannot be deleted, i.e., isEffective=true
   * 
   * @example
   * true/false
   */
  isEffective?: boolean;
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
  quota?: GetComputeEffectivePlanResponseBodyDataQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      isEffective: 'isEffective',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isEffective: 'boolean',
      name: 'string',
      quota: GetComputeEffectivePlanResponseBodyDataQuota,
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

