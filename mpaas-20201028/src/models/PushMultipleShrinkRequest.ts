// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMultipleShrinkRequestTargetMsg extends $dara.Model {
  extendedParams?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  msgKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  target?: string;
  templateKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      extendedParams: 'ExtendedParams',
      msgKey: 'MsgKey',
      target: 'Target',
      templateKeyValue: 'TemplateKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedParams: 'string',
      msgKey: 'string',
      target: 'string',
      templateKeyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleShrinkRequest extends $dara.Model {
  activityContentState?: any;
  activityEvent?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  channelId?: string;
  classification?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryType?: number;
  dismissalDate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  expiredSeconds?: number;
  extendedParams?: string;
  miChannelId?: string;
  notifyLevelShrink?: string;
  notifyType?: string;
  pushAction?: number;
  silent?: number;
  strategyContent?: string;
  strategyType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  targetMsg?: PushMultipleShrinkRequestTargetMsg[];
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  tenantId?: string;
  thirdChannelCategoryShrink?: string;
  transparentMessagePayload?: any;
  transparentMessageUrgency?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      activityContentState: 'ActivityContentState',
      activityEvent: 'ActivityEvent',
      appId: 'AppId',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      dismissalDate: 'DismissalDate',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      notifyLevelShrink: 'NotifyLevel',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsg: 'TargetMsg',
      taskName: 'TaskName',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      thirdChannelCategoryShrink: 'ThirdChannelCategory',
      transparentMessagePayload: 'TransparentMessagePayload',
      transparentMessageUrgency: 'TransparentMessageUrgency',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityContentState: 'any',
      activityEvent: 'string',
      appId: 'string',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      dismissalDate: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      notifyLevelShrink: 'string',
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsg: { 'type': 'array', 'itemType': PushMultipleShrinkRequestTargetMsg },
      taskName: 'string',
      templateName: 'string',
      tenantId: 'string',
      thirdChannelCategoryShrink: 'string',
      transparentMessagePayload: 'any',
      transparentMessageUrgency: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetMsg)) {
      $dara.Model.validateArray(this.targetMsg);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

