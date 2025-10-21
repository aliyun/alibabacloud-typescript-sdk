// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ErrorDetails } from "./ErrorDetails";


export class SqlStatementExecuteResult extends $dara.Model {
  errorDetails?: ErrorDetails;
  executeSuccess?: boolean;
  statement?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetails: 'errorDetails',
      executeSuccess: 'executeSuccess',
      statement: 'statement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetails: ErrorDetails,
      executeSuccess: 'boolean',
      statement: 'string',
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

