// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValidationErrorDetails } from "./ValidationErrorDetails";


export class ValidateStatementResult extends $dara.Model {
  errorDetails?: ValidationErrorDetails;
  /**
   * @example
   * "there have some errors""
   */
  validationResult?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetails: 'errorDetails',
      validationResult: 'validationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetails: ValidationErrorDetails,
      validationResult: 'string',
    };
  }

  validate() {
    if(this.errorDetails && typeof (this.errorDetails as any).validate === 'function') {
      (this.errorDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

