// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseUninvitedAdminInviteJoinEnterpriseResponseBodyData } from "./EnterpriseUninvitedAdminInviteJoinEnterpriseResponseBodyData";


export class EnterpriseUninvitedAdminInviteJoinEnterpriseResponseBody extends $dara.Model {
  code?: string;
  data?: EnterpriseUninvitedAdminInviteJoinEnterpriseResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': EnterpriseUninvitedAdminInviteJoinEnterpriseResponseBodyData },
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

