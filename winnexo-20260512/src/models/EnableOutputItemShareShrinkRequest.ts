// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableOutputItemShareShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the output item.
   * 
   * @example
   * exampleOutputItemId
   */
  outputItemId?: string;
  /**
   * @remarks
   * The name of the output item. This parameter must be used together with sessionId. If multiple output items have the same name, the request is rejected and you are prompted to use outputItemId instead.
   * 
   * @example
   * Quarterly Review.pptx
   */
  outputItemName?: string;
  /**
   * @remarks
   * The session ID used for exact filtering. The length is 1 to 128 characters. This parameter applies to common sessions, skill sessions, and the executionId of task executions.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The sharing scope. Valid values:
   * - PUBLIC: Accessible to all users.
   * - SPECIFIED: Accessible only to specified users or user groups.
   * 
   * @example
   * PUBLIC
   */
  shareAccessType?: string;
  /**
   * @remarks
   * The list of user group IDs within the specified scope.
   * 
   * @example
   * ["group-1"]
   */
  shareUserGroupIdsShrink?: string;
  /**
   * @remarks
   * The list of platform user IDs within the specified scope.
   * 
   * @example
   * [10001]
   */
  shareUserIdsShrink?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      outputItemId: 'outputItemId',
      outputItemName: 'outputItemName',
      sessionId: 'sessionId',
      shareAccessType: 'shareAccessType',
      shareUserGroupIdsShrink: 'shareUserGroupIds',
      shareUserIdsShrink: 'shareUserIds',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputItemId: 'string',
      outputItemName: 'string',
      sessionId: 'string',
      shareAccessType: 'string',
      shareUserGroupIdsShrink: 'string',
      shareUserIdsShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

