// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopNodeDiagnosticRequest extends $dara.Model {
  /**
   * @remarks
   * The report ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15678327322
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

