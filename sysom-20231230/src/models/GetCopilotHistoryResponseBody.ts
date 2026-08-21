// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCopilotHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The chat content text.
   * 
   * @example
   * Specific content replied by Copilot
   */
  content?: string;
  /**
   * @remarks
   * The time of the chat record. The value is of the string type.
   * 
   * @example
   * 2024-09-02 10:02:39
   */
  time?: string;
  /**
   * @remarks
   * The role identifier. Valid values:
   * - user: a user.
   * - copilot: a bot.
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
   * The error code.
   * 
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The list of chat records. The length equals the requested count. If the actual chat records are fewer than the requested count, the actual number is returned. Format: [{"user":"","content":"".question,"time":""},{...}]
   */
  data?: GetCopilotHistoryResponseBodyData[];
  /**
   * @remarks
   * The error message.
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

