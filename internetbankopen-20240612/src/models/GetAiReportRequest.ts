// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiReportRequest extends $dara.Model {
  /**
   * @example
   * call-3f2b8c1e-6d4a-4b7e-9a1c-2e5f7d8b9c0a
   */
  callId?: string;
  /**
   * @example
   * report-3f2b8c1e-6d4a-4b7e-9a1c-2e5f7d8b9c0a
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'callId',
      reportId: 'reportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
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

