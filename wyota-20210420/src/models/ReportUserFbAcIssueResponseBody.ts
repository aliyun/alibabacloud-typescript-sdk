// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportUserFbAcIssueResponseBodyData extends $dara.Model {
  issueId?: number;
  static names(): { [key: string]: string } {
    return {
      issueId: 'IssueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbAcIssueResponseBody extends $dara.Model {
  code?: string;
  data?: ReportUserFbAcIssueResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ReportUserFbAcIssueResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

