// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseAccountQueryAccountGrantedRolesResponseBodyData } from "./EnterpriseAccountQueryAccountGrantedRolesResponseBodyData";


export class EnterpriseAccountQueryAccountGrantedRolesResponseBody extends $dara.Model {
  code?: string;
  data?: EnterpriseAccountQueryAccountGrantedRolesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': EnterpriseAccountQueryAccountGrantedRolesResponseBodyData },
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

