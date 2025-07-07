// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetail } from "./EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetail";


export class EnterpriseRoleQueryBizRoleDetailResponseBody extends $dara.Model {
  bizRoleDetail?: EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetail;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizRoleDetail: 'BizRoleDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRoleDetail: EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetail,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.bizRoleDetail && typeof (this.bizRoleDetail as any).validate === 'function') {
      (this.bizRoleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

