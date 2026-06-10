// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCopilotHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Text content of the chat
   * 
   * @example
   * copilot回复的具体内容
   */
  content?: string;
  /**
   * @remarks
   * Time of the chat record, string type
   * 
   * @example
   * 2024-09-02 10:02:39
   */
  time?: string;
  /**
   * @remarks
   * user/copilot; user indicates the User, and copilot indicates the bot
   * 
   * @example
   * user
   * copilot
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      time: 'time',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      time: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCopilotHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * error code
   * 
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * List of chat records. The length equals the requested quantity. If the actual number of chat records is less than the requested quantity, the list contains all available records. Format: [{"user": "", "content": "", "time": ""}, {...}]
   */
  data?: GetCopilotHistoryResponseBodyData[];
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
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

