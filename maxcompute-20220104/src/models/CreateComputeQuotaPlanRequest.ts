// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateComputeQuotaPlanRequestQuotaParameter extends $dara.Model {
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

export class CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter extends $dara.Model {
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

export class CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nickName?: string;
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

export class CreateComputeQuotaPlanRequestQuota extends $dara.Model {
  parameter?: CreateComputeQuotaPlanRequestQuotaParameter;
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

export class CreateComputeQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
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

