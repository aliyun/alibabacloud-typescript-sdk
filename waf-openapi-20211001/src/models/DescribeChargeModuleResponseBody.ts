// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeModuleResponseBodyChargeModules extends $dara.Model {
  /**
   * @example
   * NORMAL_PRICE
   */
  chargeMode?: string;
  chargeModeDetails?: string[];
  /**
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
   * @example
   * Hour
   */
  periodType?: string;
  /**
   * @example
   * domain
   */
  usageType?: string;
  /**
   * @example
   * 1
   */
  usageUnitFactor?: number;
  static names(): { [key: string]: string } {
    return {
      chargeMode: 'ChargeMode',
      chargeModeDetails: 'ChargeModeDetails',
      moduleCode: 'ModuleCode',
      periodType: 'PeriodType',
      usageType: 'UsageType',
      usageUnitFactor: 'UsageUnitFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeMode: 'string',
      chargeModeDetails: { 'type': 'array', 'itemType': 'string' },
      moduleCode: 'string',
      periodType: 'string',
      usageType: 'string',
      usageUnitFactor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chargeModeDetails)) {
      $dara.Model.validateArray(this.chargeModeDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChargeModuleResponseBody extends $dara.Model {
  chargeModules?: DescribeChargeModuleResponseBodyChargeModules[];
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeModules: 'ChargeModules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeModules: { 'type': 'array', 'itemType': DescribeChargeModuleResponseBodyChargeModules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chargeModules)) {
      $dara.Model.validateArray(this.chargeModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

