// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateShareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Invalid request parameters
   */
  message?: string;
  /**
   * @remarks
   * The output item ID.
   * 
   * @example
   * exampleOutputItemId
   */
  outputItemId?: string;
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
   * The unique identifier of the function session.
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
   * SPECIFIED
   */
  shareAccessType?: string;
  /**
   * @remarks
   * Specifies whether sharing is enabled.
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
   * The relative path for in-site sharing. This parameter is empty when sharing is disabled.
   * 
   * @example
   * /10001/share/output/token
   */
  sharePath?: string;
  /**
   * @remarks
   * The sharing token, which is returned when sharing is enabled. You can use this token to access the public sharing preview API.
   * 
   * @example
   * exampleShareToken
   */
  shareToken?: string;
  /**
   * @remarks
   * The absolute URL of the current sharing link. This parameter is empty when sharing is disabled.
   * 
   * @example
   * https://example.com/10001/share/output/token
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
   * [10001]
   */
  shareUserIds?: number[];
  /**
   * @remarks
   * The type of the current permission. Valid values:
   * - period: Period type.
   * - objective: Objective type.
   * - kr: Key result type.
   * 
   * @example
   * outputItem
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      outputItemId: 'outputItemId',
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
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      outputItemId: 'string',
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
      targetType: 'string',
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

