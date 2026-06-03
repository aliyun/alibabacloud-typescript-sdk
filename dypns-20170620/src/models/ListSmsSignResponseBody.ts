// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmsSignResponseBodyData extends $dara.Model {
  auditResult?: string;
  createDate?: number;
  defaultFlag?: boolean;
  smsSignName?: string;
  status?: string;
  testFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditResult: 'AuditResult',
      createDate: 'CreateDate',
      defaultFlag: 'DefaultFlag',
      smsSignName: 'SmsSignName',
      status: 'Status',
      testFlag: 'TestFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditResult: 'string',
      createDate: 'number',
      defaultFlag: 'boolean',
      smsSignName: 'string',
      status: 'string',
      testFlag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsSignResponseBody extends $dara.Model {
  code?: string;
  data?: ListSmsSignResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListSmsSignResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

