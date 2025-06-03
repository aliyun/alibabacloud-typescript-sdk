// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes } from "./DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes";


export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData extends $dara.Model {
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes },
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

