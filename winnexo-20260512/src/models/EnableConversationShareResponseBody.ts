// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableConversationShareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of SUCCESS indicates success. For failures, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * Invalid request parameters
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source single-chat session.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The current sharing scope. Valid values: PUBLIC and SPECIFIED.
   * 
   * @example
   * PUBLIC
   */
  shareAccessType?: string;
  /**
   * @remarks
   * Indicates whether sharing is enabled.
   * 
   * @example
   * true
   */
  shareEnabled?: boolean;
  /**
   * @remarks
   * The time when sharing was most recently enabled, in ISO 8601 format.
   * 
   * @example
   * 2026-11-16T13:00:00+00:00
   */
  shareEnabledAt?: string;
  /**
   * @remarks
   * The relative path for in-site sharing. This value is empty when sharing is disabled.
   * 
   * @example
   * /10001/share/chat/token
   */
  sharePath?: string;
  /**
   * @remarks
   * The sharing token. This token is present when sharing is enabled and can be used to access the public sharing preview API operation.
   * 
   * @example
   * exampleShareToken
   */
  shareToken?: string;
  /**
   * @remarks
   * The absolute URL of the current sharing link. This value is empty when sharing is disabled.
   * 
   * @example
   * https://example.com/10001/share/chat/token
   */
  shareUrl?: string;
  /**
   * @remarks
   * The list of currently specified user group IDs.
   * 
   * @example
   * []
   */
  shareUserGroupIds?: string[];
  /**
   * @remarks
   * The list of currently specified user IDs.
   * 
   * @example
   * []
   */
  shareUserIds?: number[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      sessionId: 'sessionId',
      shareAccessType: 'shareAccessType',
      shareEnabled: 'shareEnabled',
      shareEnabledAt: 'shareEnabledAt',
      sharePath: 'sharePath',
      shareToken: 'shareToken',
      shareUrl: 'shareUrl',
      shareUserGroupIds: 'shareUserGroupIds',
      shareUserIds: 'shareUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      sessionId: 'string',
      shareAccessType: 'string',
      shareEnabled: 'boolean',
      shareEnabledAt: 'string',
      sharePath: 'string',
      shareToken: 'string',
      shareUrl: 'string',
      shareUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      shareUserIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.shareUserGroupIds)) {
      $dara.Model.validateArray(this.shareUserGroupIds);
    }
    if(Array.isArray(this.shareUserIds)) {
      $dara.Model.validateArray(this.shareUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

