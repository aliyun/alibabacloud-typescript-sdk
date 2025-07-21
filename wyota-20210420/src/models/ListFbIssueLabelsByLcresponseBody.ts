// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFbIssueLabelsByLCResponseBodyData extends $dara.Model {
  issueLabel?: string[];
  static names(): { [key: string]: string } {
    return {
      issueLabel: 'IssueLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueLabel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.issueLabel)) {
      $dara.Model.validateArray(this.issueLabel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFbIssueLabelsByLCResponseBody extends $dara.Model {
  code?: string;
  data?: ListFbIssueLabelsByLCResponseBodyData;
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
      data: ListFbIssueLabelsByLCResponseBodyData,
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

