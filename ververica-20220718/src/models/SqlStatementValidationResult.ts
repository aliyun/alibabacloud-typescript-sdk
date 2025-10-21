// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ErrorDetails } from "./ErrorDetails";


export class SqlStatementValidationResult extends $dara.Model {
  errorDetails?: ErrorDetails;
  message?: string;
  success?: boolean;
  validationResult?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetails: 'errorDetails',
      message: 'message',
      success: 'success',
      validationResult: 'validationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetails: ErrorDetails,
      message: 'string',
      success: 'boolean',
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

