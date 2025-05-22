// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiagnosticRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-d540def087714890****
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

