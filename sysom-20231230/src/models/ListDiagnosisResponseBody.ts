// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDiagnosisResponseBodyData } from "./ListDiagnosisResponseBodyData";


export class ListDiagnosisResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListDiagnosisResponseBodyData[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDiagnosisResponseBodyData },
      message: 'string',
      total: 'number',
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

