// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInspectionReportRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The inspection report ID.
   * 
   * @example
   * 91bec4c5a168494e8128468e3995df87
   */
  reportId?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      reportId: 'reportId',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      reportId: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

