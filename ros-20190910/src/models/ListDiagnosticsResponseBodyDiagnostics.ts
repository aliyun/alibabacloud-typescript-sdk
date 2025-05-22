// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticsResponseBodyDiagnostics extends $dara.Model {
  /**
   * @remarks
   * The time when the diagnostic report was generated.
   * 
   * @example
   * 2022-08-01T02:23:55
   */
  createTime?: string;
  /**
   * @remarks
   * The keyword in the diagnosis.
   * 
   * @example
   * 047D84D9-D3EB-5DA8-87F1-9A7DD5598A5D
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The product that is diagnosed.
   * 
   * @example
   * ros
   */
  diagnosticProduct?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-2963bfbcac834f1a****
   */
  reportId?: string;
  /**
   * @remarks
   * The diagnosis status.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      diagnosticKey: 'DiagnosticKey',
      diagnosticProduct: 'DiagnosticProduct',
      reportId: 'ReportId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      diagnosticKey: 'string',
      diagnosticProduct: 'string',
      reportId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

