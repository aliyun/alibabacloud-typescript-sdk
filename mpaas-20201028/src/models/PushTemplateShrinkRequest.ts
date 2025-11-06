// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushTemplateShrinkRequest extends $dara.Model {
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
  smsSignName?: string;
  smsStrategy?: number;
  smsTemplateCode?: string;
  smsTemplateParam?: string;
  strategyContent?: string;
  strategyType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  targetMsgkey?: string;
  taskName?: string;
  templateKeyValue?: string;
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
      smsSignName: 'SmsSignName',
      smsStrategy: 'SmsStrategy',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParam: 'SmsTemplateParam',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
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
      smsSignName: 'string',
      smsStrategy: 'number',
      smsTemplateCode: 'string',
      smsTemplateParam: 'string',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      tenantId: 'string',
      thirdChannelCategoryShrink: 'string',
      transparentMessagePayload: 'any',
      transparentMessageUrgency: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

