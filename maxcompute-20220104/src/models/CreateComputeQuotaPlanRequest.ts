// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateComputeQuotaPlanRequestQuota } from "./CreateComputeQuotaPlanRequestQuota";


export class CreateComputeQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The name of quota plan.
   * 
   * This parameter is required.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The parameters of quota plan.
   */
  quota?: CreateComputeQuotaPlanRequestQuota;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quota: CreateComputeQuotaPlanRequestQuota,
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

