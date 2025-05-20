// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticResultRequest extends $dara.Model {
  /**
   * @remarks
   * Diagnostic ID
   * 
   * @example
   * diag-i151942361720577788844
   */
  diagnosticId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticId: 'DiagnosticId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

