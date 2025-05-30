// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateComputeQuotaPlanRequestQuotaParameter } from "./UpdateComputeQuotaPlanRequestQuotaParameter";
import { UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoList } from "./UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoList";


export class UpdateComputeQuotaPlanRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The parameters of level-1 quota.
   */
  parameter?: UpdateComputeQuotaPlanRequestQuotaParameter;
  /**
   * @remarks
   * The list of level-2 quotas.
   */
  subQuotaInfoList?: UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'parameter',
      subQuotaInfoList: 'subQuotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: UpdateComputeQuotaPlanRequestQuotaParameter,
      subQuotaInfoList: { 'type': 'array', 'itemType': UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoList },
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

