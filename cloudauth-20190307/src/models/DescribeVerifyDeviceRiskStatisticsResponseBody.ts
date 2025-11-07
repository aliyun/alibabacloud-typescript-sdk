// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyDeviceRiskStatisticsResponseBodyResultObjectItems extends $dara.Model {
  /**
   * @remarks
   * Daily call count.
   * 
   * @example
   * 11
   */
  dailyCallCount?: number;
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 2025-10-10
   */
  date?: string;
  /**
   * @remarks
   * Abnormal device risk ratio.
   * 
   * @example
   * 0
   */
  deviceRiskRate?: string;
  /**
   * @remarks
   * Abnormal identity risk ratio.
   * 
   * @example
   * 0
   */
  identityRiskRate?: string;
  static names(): { [key: string]: string } {
    return {
      dailyCallCount: 'DailyCallCount',
      date: 'Date',
      deviceRiskRate: 'DeviceRiskRate',
      identityRiskRate: 'IdentityRiskRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyCallCount: 'number',
      date: 'string',
      deviceRiskRate: 'string',
      identityRiskRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyDeviceRiskStatisticsResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Suspected fake face percentage: total number of suspected fake faces / total number of risks.
   * 
   * @example
   * 0
   */
  faceAttackRate?: string;
  /**
   * @remarks
   * Total number of suspected fake identities.
   * 
   * @example
   * 0
   */
  idFakeRate?: string;
  /**
   * @remarks
   * Data items in the response.
   */
  items?: DescribeVerifyDeviceRiskStatisticsResponseBodyResultObjectItems[];
  /**
   * @remarks
   * Number of risks.
   * 
   * @example
   * 2
   */
  riskCount?: number;
  /**
   * @remarks
   * Root percentage: total number of root / total number of risks.
   * 
   * @example
   * 0
   */
  rootRate?: string;
  /**
   * @remarks
   * Simulator percentage: total number of simulators / total number of risks.
   * 
   * @example
   * 0
   */
  simulatorRate?: string;
  /**
   * @remarks
   * Virtual video percentage: total number of virtual videos / total number of risks.
   * 
   * @example
   * 23.2
   */
  virtualVideoRate?: string;
  static names(): { [key: string]: string } {
    return {
      faceAttackRate: 'FaceAttackRate',
      idFakeRate: 'IdFakeRate',
      items: 'Items',
      riskCount: 'RiskCount',
      rootRate: 'RootRate',
      simulatorRate: 'SimulatorRate',
      virtualVideoRate: 'VirtualVideoRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttackRate: 'string',
      idFakeRate: 'string',
      items: { 'type': 'array', 'itemType': DescribeVerifyDeviceRiskStatisticsResponseBodyResultObjectItems },
      riskCount: 'number',
      rootRate: 'string',
      simulatorRate: 'string',
      virtualVideoRate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyDeviceRiskStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * B3193814-AE54-50C5-9070-68B69C07287D
   */
  requestId?: string;
  /**
   * @remarks
   * Authentication result.
   */
  resultObject?: DescribeVerifyDeviceRiskStatisticsResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVerifyDeviceRiskStatisticsResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

