// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateGovernanceReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 492E130C-76D3-55D5-BE5C-C023E431369A
   */
  requestId?: string;
  /**
   * @remarks
   * The report generation status. Valid values:
   * 
   * *   Started: The system starts to generate a governance report.
   * *   Progressing: The system is generating a governance report.
   * *   Completed: A governance report is generated.
   * 
   * @example
   * Started
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

