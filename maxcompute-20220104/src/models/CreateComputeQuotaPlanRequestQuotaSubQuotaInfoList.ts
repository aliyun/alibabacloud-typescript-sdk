// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter } from "./CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter";


export class CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The nickname of the level-2 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * os_ComputeQuota
   */
  nickName?: string;
  /**
   * @remarks
   * The parameters of the level-2 quota.
   */
  parameter?: CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter;
  static names(): { [key: string]: string } {
    return {
      nickName: 'nickName',
      parameter: 'parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      parameter: CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter,
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

