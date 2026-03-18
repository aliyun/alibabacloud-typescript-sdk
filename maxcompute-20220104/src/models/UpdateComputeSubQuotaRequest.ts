// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeSubQuotaRequestSubQuotaInfoListParameter extends $dara.Model {
  enablePriority?: boolean;
  forceReservedMin?: boolean;
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
  schedulerType?: string;
  singleJobCULimit?: number;
  static names(): { [key: string]: string } {
    return {
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      minCU: 'minCU',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      minCU: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeSubQuotaRequestSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nickName?: string;
  parameter?: UpdateComputeSubQuotaRequestSubQuotaInfoListParameter;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'nickName',
      parameter: 'parameter',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      parameter: UpdateComputeSubQuotaRequestSubQuotaInfoListParameter,
      type: 'string',
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

export class UpdateComputeSubQuotaRequest extends $dara.Model {
  subQuotaInfoList?: UpdateComputeSubQuotaRequestSubQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      subQuotaInfoList: 'subQuotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subQuotaInfoList: { 'type': 'array', 'itemType': UpdateComputeSubQuotaRequestSubQuotaInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.subQuotaInfoList)) {
      $dara.Model.validateArray(this.subQuotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

