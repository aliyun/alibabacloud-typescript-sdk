// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportResponseResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  outRequestNo?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      outRequestNo: 'outRequestNo',
      reportUrl: 'reportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      outRequestNo: 'string',
      reportUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

