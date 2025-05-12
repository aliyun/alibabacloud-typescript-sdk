// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServiceInstanceDiagnosisResponseBodyDiagnosis } from "./DescribeServiceInstanceDiagnosisResponseBodyDiagnosis";


export class DescribeServiceInstanceDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostics information.
   */
  diagnosis?: DescribeServiceInstanceDiagnosisResponseBodyDiagnosis;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosis: 'Diagnosis',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosis: DescribeServiceInstanceDiagnosisResponseBodyDiagnosis,
      requestId: 'string',
    };
  }

  validate() {
    if(this.diagnosis && typeof (this.diagnosis as any).validate === 'function') {
      (this.diagnosis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

