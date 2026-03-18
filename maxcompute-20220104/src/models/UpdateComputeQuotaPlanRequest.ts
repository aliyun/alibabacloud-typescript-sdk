// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeQuotaPlanRequestQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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
   * This parameter is required.
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  maxCU?: number;
  /**
   * @remarks
   * This parameter is required.
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
   * This parameter is required.
   */
  nickName?: string;
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
  parameter?: UpdateComputeQuotaPlanRequestQuotaParameter;
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
   * This parameter is required.
   */
  name?: string;
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

