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

