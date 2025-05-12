// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvokeDiagnosisResponseBodyData } from "./InvokeDiagnosisResponseBodyData";


export class InvokeDiagnosisResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: InvokeDiagnosisResponseBodyData;
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InvokeDiagnosisResponseBodyData,
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

