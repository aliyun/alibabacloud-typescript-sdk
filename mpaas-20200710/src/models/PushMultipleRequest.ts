// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMultipleRequestTargetMsg extends $dara.Model {
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

export class PushMultipleRequest extends $dara.Model {
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
  targetMsg?: PushMultipleRequestTargetMsg[];
  taskName?: string;
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
      targetMsg: 'TargetMsg',
      taskName: 'TaskName',
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
      targetMsg: { 'type': 'array', 'itemType': PushMultipleRequestTargetMsg },
      taskName: 'string',
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
    if(Array.isArray(this.targetMsg)) {
      $dara.Model.validateArray(this.targetMsg);
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

