// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushBroadcastShrinkRequest extends $dara.Model {
  androidChannel?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  bindEndTime?: number;
  bindStartTime?: number;
  channelId?: string;
  classification?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  expiredSeconds?: number;
  extendedParams?: string;
  miChannelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  msgkey?: string;
  notifyLevelShrink?: string;
  notifyType?: string;
  pushAction?: number;
  pushStatus?: number;
  silent?: number;
  strategyContent?: string;
  strategyType?: number;
  taskName?: string;
  templateKeyValue?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  tenantId?: string;
  thirdChannelCategoryShrink?: string;
  timeMode?: number;
  transparentMessagePayload?: any;
  transparentMessageUrgency?: string;
  unBindEndTime?: number;
  unBindPeriod?: number;
  unBindStartTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      androidChannel: 'AndroidChannel',
      appId: 'AppId',
      bindEndTime: 'BindEndTime',
      bindStartTime: 'BindStartTime',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      msgkey: 'Msgkey',
      notifyLevelShrink: 'NotifyLevel',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      pushStatus: 'PushStatus',
      silent: 'Silent',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      thirdChannelCategoryShrink: 'ThirdChannelCategory',
      timeMode: 'TimeMode',
      transparentMessagePayload: 'TransparentMessagePayload',
      transparentMessageUrgency: 'TransparentMessageUrgency',
      unBindEndTime: 'UnBindEndTime',
      unBindPeriod: 'UnBindPeriod',
      unBindStartTime: 'UnBindStartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidChannel: 'number',
      appId: 'string',
      bindEndTime: 'number',
      bindStartTime: 'number',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      msgkey: 'string',
      notifyLevelShrink: 'string',
      notifyType: 'string',
      pushAction: 'number',
      pushStatus: 'number',
      silent: 'number',
      strategyContent: 'string',
      strategyType: 'number',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      tenantId: 'string',
      thirdChannelCategoryShrink: 'string',
      timeMode: 'number',
      transparentMessagePayload: 'any',
      transparentMessageUrgency: 'string',
      unBindEndTime: 'number',
      unBindPeriod: 'number',
      unBindStartTime: 'number',
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

