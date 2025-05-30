// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter } from "./UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter";


export class UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoList extends $dara.Model {
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
  parameter?: UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter;
  static names(): { [key: string]: string } {
    return {
      nickName: 'nickName',
      parameter: 'parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      parameter: UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter,
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

