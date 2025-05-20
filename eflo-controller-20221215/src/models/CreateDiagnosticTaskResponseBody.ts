// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Diagnosis ID
   * 
   * @example
   * diag-i150553931717380274931
   */
  diagnosticId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A511C02A-0127-51AA-A9F9-966382C9A1B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticId: 'DiagnosticId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

