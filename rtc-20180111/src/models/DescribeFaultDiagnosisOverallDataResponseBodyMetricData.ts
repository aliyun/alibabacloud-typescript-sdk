// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes } from "./DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes";


export class DescribeFaultDiagnosisOverallDataResponseBodyMetricData extends $dara.Model {
  nodes?: DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes },
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

