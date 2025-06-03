// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFaultDiagnosisUserDetailResponseBodyCallInfo } from "./DescribeFaultDiagnosisUserDetailResponseBodyCallInfo";
import { DescribeFaultDiagnosisUserDetailResponseBodyFactorList } from "./DescribeFaultDiagnosisUserDetailResponseBodyFactorList";
import { DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData } from "./DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData";
import { DescribeFaultDiagnosisUserDetailResponseBodyUserDetail } from "./DescribeFaultDiagnosisUserDetailResponseBodyUserDetail";


export class DescribeFaultDiagnosisUserDetailResponseBody extends $dara.Model {
  callInfo?: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo;
  factorList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorList[];
  faultMetricData?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData;
  networkOperators?: string[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  userDetail?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      factorList: 'FactorList',
      faultMetricData: 'FaultMetricData',
      networkOperators: 'NetworkOperators',
      requestId: 'RequestId',
      userDetail: 'UserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo,
      factorList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorList },
      faultMetricData: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData,
      networkOperators: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      userDetail: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail,
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
    if(Array.isArray(this.factorList)) {
      $dara.Model.validateArray(this.factorList);
    }
    if(this.faultMetricData && typeof (this.faultMetricData as any).validate === 'function') {
      (this.faultMetricData as any).validate();
    }
    if(Array.isArray(this.networkOperators)) {
      $dara.Model.validateArray(this.networkOperators);
    }
    if(this.userDetail && typeof (this.userDetail as any).validate === 'function') {
      (this.userDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

