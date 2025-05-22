// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis } from "./DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis";


export class DescribePreCheckStatusResponseBodyNetworkDiagnosisResult extends $dara.Model {
  /**
   * @remarks
   * Network diagnostic report
   */
  diagnosis?: DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis[];
  /**
   * @remarks
   * Diagnose model version.
   * 
   * @example
   * network-v0.2
   */
  modelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosis: 'Diagnosis',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosis: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis },
      modelVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosis)) {
      $dara.Model.validateArray(this.diagnosis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

