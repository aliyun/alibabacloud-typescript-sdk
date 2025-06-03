// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes } from "./DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes";


export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas extends $dara.Model {
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes[];
  /**
   * @example
   * SENDER
   */
  role?: string;
  /**
   * @example
   * AUDIO_STUCK
   */
  type?: string;
  /**
   * @example
   * 0a497933****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      role: 'Role',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes },
      role: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

