// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateShareRequest extends $dara.Model {
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
   * The name of the output item. This parameter must be used together with sessionId.
   * 
   * @example
   * Quarterly Review.pptx
   */
  outputItemName?: string;
  /**
   * @remarks
   * Specifies whether to refresh the sharing link. This is supported only for output items that have sharing enabled or are being enabled in the current request.
   * 
   * @example
   * false
   */
  refreshShareLink?: boolean;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The sharing scope. Valid values:
   * - PUBLIC: Accessible to all users.
   * - SPECIFIED: Accessible to specified users or user groups.
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
   * The list of user group IDs within the specified scope. Pass an empty array to clear the list.
   * 
   * @example
   * ["group-1"]
   */
  shareUserGroupIds?: string[];
  /**
   * @remarks
   * The list of platform user IDs within the specified scope. Pass an empty array to clear the list.
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
   * This parameter is required.
   * 
   * @example
   * outputItem
   */
  targetType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      outputItemId: 'outputItemId',
      outputItemName: 'outputItemName',
      refreshShareLink: 'refreshShareLink',
      sessionId: 'sessionId',
      shareAccessType: 'shareAccessType',
      shareEnabled: 'shareEnabled',
      shareUserGroupIds: 'shareUserGroupIds',
      shareUserIds: 'shareUserIds',
      targetType: 'targetType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputItemId: 'string',
      outputItemName: 'string',
      refreshShareLink: 'boolean',
      sessionId: 'string',
      shareAccessType: 'string',
      shareEnabled: 'boolean',
      shareUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      shareUserIds: { 'type': 'array', 'itemType': 'number' },
      targetType: 'string',
      tenantId: 'string',
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

