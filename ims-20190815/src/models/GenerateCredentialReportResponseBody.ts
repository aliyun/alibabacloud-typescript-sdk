// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCredentialReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBCCA90A-A1F0-4B16-B355-692247197805
   */
  requestId?: string;
  /**
   * @remarks
   * The generation status of the user credential report. Valid values:
   * 
   * *   STARTED: The system starts to generate the user credential report.
   * *   INPROGRESS: The user credential report is being generated.
   * *   COMPLETED: The user credential report is generated.
   * 
   * @example
   * STARTED
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

