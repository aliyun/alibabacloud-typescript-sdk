// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllPrivacyRuleResponseBodyData extends $dara.Model {
  name?: string;
  privacyRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      privacyRuleId: 'PrivacyRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      privacyRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPrivacyRuleResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllPrivacyRuleResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllPrivacyRuleResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

