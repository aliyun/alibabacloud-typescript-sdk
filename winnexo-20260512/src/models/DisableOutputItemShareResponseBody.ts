// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableOutputItemShareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
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
   * The most recently configured sharing scope.
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
   * false
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
   * The relative path for internal sharing. This value is empty when sharing is disabled.
   * 
   * @example
   * null
   */
  sharePath?: string;
  /**
   * @remarks
   * The sharing token. This token exists when sharing is enabled and can be used to access the public sharing preview API operation.
   * 
   * @example
   * null
   */
  shareToken?: string;
  /**
   * @remarks
   * The current absolute sharing URL. This value is empty when sharing is disabled.
   * 
   * @example
   * null
   */
  shareUrl?: string;
  /**
   * @remarks
   * The list of specified user group IDs from the most recent configuration.
   * 
   * @example
   * []
   */
  shareUserGroupIds?: string[];
  /**
   * @remarks
   * The list of specified user IDs from the most recent configuration.
   * 
   * @example
   * []
   */
  shareUserIds?: number[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      outputItemId: 'outputItemId',
      requestId: 'requestId',
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
      outputItemId: 'string',
      requestId: 'string',
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

