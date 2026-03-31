// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeQuotaPlanRequestQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs in the level-1 quota.
   * > The default value is 0. The maximum value of this parameter must be equal to the number of subscription-based reserved CUs and cannot exceed 10,000 CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs.
   * > The total number of elastically reserved CUs in all the level-2 quotas is equal to the number of elastically reserved CUs in the level-1 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * > The value of maxCU must be less than or equal to the value of maxCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * > 
   * >- The total value of minCU in all the level-2 quotas is equal to the value of minCU in the level-1 quota.
   * >- The value of minCU must be less than or equal to the value of maxCU in the level-2 quota and less than or equal to the value of minCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      maxCU: 'maxCU',
      minCU: 'minCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      maxCU: 'number',
      minCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class UpdateComputeQuotaPlanRequest extends $dara.Model {
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
  quota?: UpdateComputeQuotaPlanRequestQuota;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quota: UpdateComputeQuotaPlanRequestQuota,
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

