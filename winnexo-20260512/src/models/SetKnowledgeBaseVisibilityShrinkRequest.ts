// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetKnowledgeBaseVisibilityShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * token
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * Specifies how to handle subfolders.
   * 
   * @example
   * CURRENT_ONLY
   */
  cascadeMode?: string;
  /**
   * @remarks
   * The user code.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The target ID, which varies based on the target type.
   * - If the type is period, specify the period ID.
   * - If the type is objective, specify the objective ID.
   * - If the type is kr, specify the keyResult ID.
   * 
   * This parameter is required.
   * 
   * @example
   * kb_001
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the current permission. Valid values:
   * - period: period type
   * - objective: objective type
   * - kr: keyResult type
   * 
   * This parameter is required.
   * 
   * @example
   * KB
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs. If this parameter is not specified, the current tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The collection of user groups.
   * 
   * @example
   * ["group-1"]
   */
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * The collection of user IDs.
   * 
   * @example
   * ["10001"]
   */
  userIdsShrink?: string;
  /**
   * @remarks
   * The visibility scope mode.
   * 
   * This parameter is required.
   * 
   * @example
   * SPECIFIED
   */
  visibilityMode?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      cascadeMode: 'cascadeMode',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      targetId: 'targetId',
      targetType: 'targetType',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      userIdsShrink: 'userIds',
      visibilityMode: 'visibilityMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      cascadeMode: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      targetId: 'string',
      targetType: 'string',
      tenantId: 'string',
      userGroupIdsShrink: 'string',
      userIdsShrink: 'string',
      visibilityMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

