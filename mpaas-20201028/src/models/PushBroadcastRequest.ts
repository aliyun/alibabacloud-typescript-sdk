// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushBroadcastRequest extends $dara.Model {
  androidChannel?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  bindPeriod?: number;
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
  thirdChannelCategory?: { [key: string]: any };
  transparentMessagePayload?: any;
  transparentMessageUrgency?: string;
  unBindPeriod?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      androidChannel: 'AndroidChannel',
      appId: 'AppId',
      bindPeriod: 'BindPeriod',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      msgkey: 'Msgkey',
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
      thirdChannelCategory: 'ThirdChannelCategory',
      transparentMessagePayload: 'TransparentMessagePayload',
      transparentMessageUrgency: 'TransparentMessageUrgency',
      unBindPeriod: 'UnBindPeriod',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidChannel: 'number',
      appId: 'string',
      bindPeriod: 'number',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      msgkey: 'string',
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
      thirdChannelCategory: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      transparentMessagePayload: 'any',
      transparentMessageUrgency: 'string',
      unBindPeriod: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.thirdChannelCategory) {
      $dara.Model.validateMap(this.thirdChannelCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

