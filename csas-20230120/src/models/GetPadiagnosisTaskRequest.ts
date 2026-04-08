// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPADiagnosisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * diag-58d0750e8786919a
   */
  diagnoseId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseId: 'DiagnoseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

