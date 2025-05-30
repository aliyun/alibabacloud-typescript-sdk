// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateComputeQuotaPlanRequestQuotaParameter } from "./CreateComputeQuotaPlanRequestQuotaParameter";
import { CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList } from "./CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList";


export class CreateComputeQuotaPlanRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The parameters of level-1 quota.
   */
  parameter?: CreateComputeQuotaPlanRequestQuotaParameter;
  /**
   * @remarks
   * The list of level-2 quotas.
   */
  subQuotaInfoList?: CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'parameter',
      subQuotaInfoList: 'subQuotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: CreateComputeQuotaPlanRequestQuotaParameter,
      subQuotaInfoList: { 'type': 'array', 'itemType': CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList },
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    if(Array.isArray(this.subQuotaInfoList)) {
      $dara.Model.validateArray(this.subQuotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

