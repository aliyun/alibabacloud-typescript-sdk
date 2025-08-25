// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushTemplateRequest extends $dara.Model {
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
  notifyLevel?: { [key: string]: any };
  notifyType?: string;
  pushAction?: number;
  silent?: number;
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
  thirdChannelCategory?: { [key: string]: any };
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
      notifyLevel: 'NotifyLevel',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      thirdChannelCategory: 'ThirdChannelCategory',
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
      notifyLevel: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      tenantId: 'string',
      thirdChannelCategory: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      transparentMessagePayload: 'any',
      transparentMessageUrgency: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.notifyLevel) {
      $dara.Model.validateMap(this.notifyLevel);
    }
    if(this.thirdChannelCategory) {
      $dara.Model.validateMap(this.thirdChannelCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

