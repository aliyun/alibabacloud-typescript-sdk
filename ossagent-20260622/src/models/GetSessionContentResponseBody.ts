// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionContentResponseBodyContentAgentContents extends $dara.Model {
  /**
   * @remarks
   * The detailed conversation chunk content. All chunks compose the complete response.
   * 
   * @example
   * {\\"id\\":\\"16aa7737-9e6a-4500-abd2-96c5f17d1188\\",\\"object\\":\\"chat.completion.chunk\\",\\"created\\":1788408524,\\"model\\":\\"oss-agent\\",\\"choices\\":[{\\"index\\":0,\\"delta\\":{\\"role\\":\\"assistant\\",\\"content\\":\\"，Hello， I am OSS Agent\\"}}]}
   */
  agentContent?: string;
  /**
   * @remarks
   * The time when the content was generated, in the yyyy-MM-dd HH:mm:ss,SSS format.
   * 
   * @example
   * 1774577589
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      agentContent: 'agentContent',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContent: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionContentResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The detailed conversation content.
   */
  agentContents?: GetSessionContentResponseBodyContentAgentContents[];
  /**
   * @remarks
   * The time when the session occurred, in the yyyy-MM-dd HH:mm:ss,SSS format.
   * 
   * @example
   * 2026-09-03 04:08:30,637
   */
  timestamp?: string;
  /**
   * @remarks
   * Indicates whether tool confirmation is required.
   * 
   * @example
   * false
   */
  toolConfirm?: boolean;
  /**
   * @remarks
   * The user content of the first message in the session.
   * 
   * @example
   * [{\\"role\\":\\"user\\",\\"content\\":\\"Hi OSS\\"}]
   */
  userContent?: string;
  static names(): { [key: string]: string } {
    return {
      agentContents: 'agentContents',
      timestamp: 'timestamp',
      toolConfirm: 'toolConfirm',
      userContent: 'userContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContents: { 'type': 'array', 'itemType': GetSessionContentResponseBodyContentAgentContents },
      timestamp: 'string',
      toolConfirm: 'boolean',
      userContent: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentContents)) {
      $dara.Model.validateArray(this.agentContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The conversation text content.
   */
  content?: GetSessionContentResponseBodyContent[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * UUID
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * UUID
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': GetSessionContentResponseBodyContent },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

