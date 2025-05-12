// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCopilotHistoryResponseBodyData } from "./GetCopilotHistoryResponseBodyData";


export class GetCopilotHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  data?: GetCopilotHistoryResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCopilotHistoryResponseBodyData },
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

