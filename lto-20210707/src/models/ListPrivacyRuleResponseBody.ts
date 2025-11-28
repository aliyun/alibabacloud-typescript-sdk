// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivacyRuleResponseBodyDataPageData extends $dara.Model {
  algImpl?: string;
  algType?: string;
  currentUser?: boolean;
  memberName?: string;
  name?: string;
  privacyRuleId?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algImpl: 'AlgImpl',
      algType: 'AlgType',
      currentUser: 'CurrentUser',
      memberName: 'MemberName',
      name: 'Name',
      privacyRuleId: 'PrivacyRuleId',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algImpl: 'string',
      algType: 'string',
      currentUser: 'boolean',
      memberName: 'string',
      name: 'string',
      privacyRuleId: 'string',
      remark: 'string',
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

export class ListPrivacyRuleResponseBodyData extends $dara.Model {
  num?: number;
  pageData?: ListPrivacyRuleResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListPrivacyRuleResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivacyRuleResponseBody extends $dara.Model {
  code?: string;
  data?: ListPrivacyRuleResponseBodyData;
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
      data: ListPrivacyRuleResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

