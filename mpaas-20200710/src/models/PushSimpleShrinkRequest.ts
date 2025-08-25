// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushSimpleShrinkRequest extends $dara.Model {
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
  content?: string;
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
  iconUrls?: string;
  imageUrls?: string;
  miChannelId?: string;
  notifyLevelShrink?: string;
  notifyType?: string;
  pushAction?: number;
  pushStyle?: number;
  silent?: number;
  strategyContent?: string;
  strategyType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  targetMsgkey?: string;
  taskName?: string;
  tenantId?: string;
  thirdChannelCategoryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  transparentMessagePayload?: any;
  transparentMessageUrgency?: string;
  uri?: string;
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
      content: 'Content',
      deliveryType: 'DeliveryType',
      dismissalDate: 'DismissalDate',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      iconUrls: 'IconUrls',
      imageUrls: 'ImageUrls',
      miChannelId: 'MiChannelId',
      notifyLevelShrink: 'NotifyLevel',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      pushStyle: 'PushStyle',
      silent: 'Silent',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      tenantId: 'TenantId',
      thirdChannelCategoryShrink: 'ThirdChannelCategory',
      title: 'Title',
      transparentMessagePayload: 'TransparentMessagePayload',
      transparentMessageUrgency: 'TransparentMessageUrgency',
      uri: 'Uri',
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
      content: 'string',
      deliveryType: 'number',
      dismissalDate: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      iconUrls: 'string',
      imageUrls: 'string',
      miChannelId: 'string',
      notifyLevelShrink: 'string',
      notifyType: 'string',
      pushAction: 'number',
      pushStyle: 'number',
      silent: 'number',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      tenantId: 'string',
      thirdChannelCategoryShrink: 'string',
      title: 'string',
      transparentMessagePayload: 'any',
      transparentMessageUrgency: 'string',
      uri: 'string',
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

