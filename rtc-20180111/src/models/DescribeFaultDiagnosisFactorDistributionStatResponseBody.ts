// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList extends $dara.Model {
  /**
   * @example
   * 1
   */
  factorId?: string;
  /**
   * @example
   * 100
   */
  userCount?: number;
  /**
   * @example
   * 0.9239
   */
  userRatio?: number;
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      userCount: 'UserCount',
      userRatio: 'UserRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      userCount: 'number',
      userRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  statList?: DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList },
    };
  }

  validate() {
    if(Array.isArray(this.statList)) {
      $dara.Model.validateArray(this.statList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

