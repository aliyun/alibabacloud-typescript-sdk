// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas } from "./DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas";
import { DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas } from "./DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas";


export class DescribeFaultDiagnosisUserDetailResponseBodyFactorList extends $dara.Model {
  /**
   * @example
   * 1
   */
  factorId?: string;
  /**
   * @example
   * LOCAL
   */
  faultSource?: string;
  relatedEventDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas[];
  relatedMetricDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas[];
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      faultSource: 'FaultSource',
      relatedEventDatas: 'RelatedEventDatas',
      relatedMetricDatas: 'RelatedMetricDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      faultSource: 'string',
      relatedEventDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas },
      relatedMetricDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas },
    };
  }

  validate() {
    if(Array.isArray(this.relatedEventDatas)) {
      $dara.Model.validateArray(this.relatedEventDatas);
    }
    if(Array.isArray(this.relatedMetricDatas)) {
      $dara.Model.validateArray(this.relatedMetricDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

