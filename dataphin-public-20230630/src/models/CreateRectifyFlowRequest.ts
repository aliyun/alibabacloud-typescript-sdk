// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRectifyFlowRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to associate with an existing process. Default value: false.
   */
  bindToRectify?: boolean;
  /**
   * @remarks
   * This parameter is required when you associate with an existing process.
   * 
   * @example
   * 117970862340
   */
  bindToRectifyId?: number;
  /**
   * @remarks
   * The operation description. This parameter is optional. Maximum length: 128 characters.
   * 
   * @example
   * Initiate quality issue rectification for the customer table
   */
  comment?: string;
  /**
   * @remarks
   * The governance object type. Valid values: TABLE, DATASOURCE_TABLE, DATASOURCE, INDEX, REALTIME_LOGICAL_TABLE, and QD_FEATURE.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  governItemType?: string;
  /**
   * @remarks
   * The list of issue IDs. Issues that cannot be rectified are skipped. If all issues are skipped, the original business error is returned.
   * 
   * This parameter is required.
   */
  governObjectIds?: number[];
  /**
   * @remarks
   * The rectification name. This parameter is required when you create a process and can contain up to 128 characters. It is ignored when you associate with an existing process.
   * 
   * @example
   * Quality issue rectification for the customer table
   */
  rectifyName?: string;
  /**
   * @remarks
   * The rectification priority. Valid values: HIGH, MIDDLE, and LOW. Default value: MIDDLE. This parameter is ignored and not verified when you associate with an existing process.
   * 
   * @example
   * MIDDLE
   */
  rectifyPriority?: string;
  /**
   * @remarks
   * The rectification scope. Valid values: QUALITY_RULE_SCOPE, QUALITY_RULE_TASK_SCOPE, QUALITY_GOVERN_OBJECT_SCOPE, and QUALITY_WATCH_SCOPE. The default value is the same as the value on the page. A rule scope may include other issues.
   * 
   * @example
   * QUALITY_GOVERN_OBJECT_SCOPE
   */
  rectifyScope?: string;
  /**
   * @remarks
   * The ID of the user who performs the rectification. Default value: the current user. This parameter is ignored when you associate with an existing process.
   * 
   * @example
   * user001
   */
  rectifyUser?: string;
  /**
   * @remarks
   * The ID of the user who performs the verification. Default value: the current user. This parameter is ignored when you associate with an existing process.
   * 
   * @example
   * user002
   */
  verifyUser?: string;
  static names(): { [key: string]: string } {
    return {
      bindToRectify: 'BindToRectify',
      bindToRectifyId: 'BindToRectifyId',
      comment: 'Comment',
      governItemType: 'GovernItemType',
      governObjectIds: 'GovernObjectIds',
      rectifyName: 'RectifyName',
      rectifyPriority: 'RectifyPriority',
      rectifyScope: 'RectifyScope',
      rectifyUser: 'RectifyUser',
      verifyUser: 'VerifyUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindToRectify: 'boolean',
      bindToRectifyId: 'number',
      comment: 'string',
      governItemType: 'string',
      governObjectIds: { 'type': 'array', 'itemType': 'number' },
      rectifyName: 'string',
      rectifyPriority: 'string',
      rectifyScope: 'string',
      rectifyUser: 'string',
      verifyUser: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.governObjectIds)) {
      $dara.Model.validateArray(this.governObjectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRectifyFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The business request parameters.
   * 
   * This parameter is required.
   */
  createCommand?: CreateRectifyFlowRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateRectifyFlowRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

