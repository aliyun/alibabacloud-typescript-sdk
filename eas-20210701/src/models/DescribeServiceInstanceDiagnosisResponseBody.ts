// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceInstanceDiagnosisResponseBodyDiagnosis extends $dara.Model {
  /**
   * @remarks
   * The solutions to the errors.
   */
  advices?: string[];
  /**
   * @remarks
   * The causes of the errors.
   */
  causes?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Container worker0 failed to pull image.
   */
  error?: string;
  static names(): { [key: string]: string } {
    return {
      advices: 'Advices',
      causes: 'Causes',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advices: { 'type': 'array', 'itemType': 'string' },
      causes: { 'type': 'array', 'itemType': 'string' },
      error: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advices)) {
      $dara.Model.validateArray(this.advices);
    }
    if(Array.isArray(this.causes)) {
      $dara.Model.validateArray(this.causes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

