// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotificationStrategyEscalationSettingCustomChannels extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelType?: string;
  severities?: string[];
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      severities: 'Severities',
      templateUuid: 'TemplateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      severities: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.severities)) {
      $dara.Model.validateArray(this.severities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyEscalationSetting extends $dara.Model {
  autoResolveMin?: number;
  customChannels?: NotificationStrategyEscalationSettingCustomChannels[];
  escalationLevel?: string;
  escalationUuid?: string;
  range?: string;
  retriggerMin?: number;
  static names(): { [key: string]: string } {
    return {
      autoResolveMin: 'AutoResolveMin',
      customChannels: 'CustomChannels',
      escalationLevel: 'EscalationLevel',
      escalationUuid: 'EscalationUuid',
      range: 'Range',
      retriggerMin: 'RetriggerMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoResolveMin: 'number',
      customChannels: { 'type': 'array', 'itemType': NotificationStrategyEscalationSettingCustomChannels },
      escalationLevel: 'string',
      escalationUuid: 'string',
      range: 'string',
      retriggerMin: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customChannels)) {
      $dara.Model.validateArray(this.customChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyFilterSettingBlackList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  field?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  op?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      op: 'Op',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyFilterSettingWhiteList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  field?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  op?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      op: 'Op',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyFilterSetting extends $dara.Model {
  blackList?: NotificationStrategyFilterSettingBlackList[][];
  whiteList?: NotificationStrategyFilterSettingWhiteList[][];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': NotificationStrategyFilterSettingBlackList } },
      whiteList: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': NotificationStrategyFilterSettingWhiteList } },
    };
  }

  validate() {
    if(Array.isArray(this.blackList)) {
      $dara.Model.validateArray(this.blackList);
    }
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyGroupingSettingGroupingItems extends $dara.Model {
  keys?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyGroupingSetting extends $dara.Model {
  enableRawAlertDispatching?: boolean;
  groupingItems?: NotificationStrategyGroupingSettingGroupingItems[];
  periodMin?: number;
  silenceSec?: number;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      enableRawAlertDispatching: 'EnableRawAlertDispatching',
      groupingItems: 'GroupingItems',
      periodMin: 'PeriodMin',
      silenceSec: 'SilenceSec',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRawAlertDispatching: 'boolean',
      groupingItems: { 'type': 'array', 'itemType': NotificationStrategyGroupingSettingGroupingItems },
      periodMin: 'number',
      silenceSec: 'number',
      times: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupingItems)) {
      $dara.Model.validateArray(this.groupingItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyPushingSetting extends $dara.Model {
  pushingDataFormat?: string;
  range?: string;
  targetUuids?: string[];
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      pushingDataFormat: 'PushingDataFormat',
      range: 'Range',
      targetUuids: 'TargetUuids',
      templateUuid: 'TemplateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushingDataFormat: 'string',
      range: 'string',
      targetUuids: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetUuids)) {
      $dara.Model.validateArray(this.targetUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyRouteSettingRoutesConditions extends $dara.Model {
  field?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      op: 'Op',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyRouteSettingRoutes extends $dara.Model {
  conditions?: NotificationStrategyRouteSettingRoutesConditions[];
  escalationUuid?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      escalationUuid: 'EscalationUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': NotificationStrategyRouteSettingRoutesConditions },
      escalationUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyRouteSetting extends $dara.Model {
  routes?: NotificationStrategyRouteSettingRoutes[];
  static names(): { [key: string]: string } {
    return {
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routes: { 'type': 'array', 'itemType': NotificationStrategyRouteSettingRoutes },
    };
  }

  validate() {
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategy extends $dara.Model {
  createTime?: string;
  description?: string;
  escalationSetting?: NotificationStrategyEscalationSetting;
  filterSetting?: NotificationStrategyFilterSetting;
  groupingSetting?: NotificationStrategyGroupingSetting;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  product?: string;
  pushingSetting?: NotificationStrategyPushingSetting;
  routeSetting?: NotificationStrategyRouteSetting;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      escalationSetting: 'EscalationSetting',
      filterSetting: 'FilterSetting',
      groupingSetting: 'GroupingSetting',
      name: 'Name',
      product: 'Product',
      pushingSetting: 'PushingSetting',
      routeSetting: 'RouteSetting',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      escalationSetting: NotificationStrategyEscalationSetting,
      filterSetting: NotificationStrategyFilterSetting,
      groupingSetting: NotificationStrategyGroupingSetting,
      name: 'string',
      product: 'string',
      pushingSetting: NotificationStrategyPushingSetting,
      routeSetting: NotificationStrategyRouteSetting,
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.escalationSetting && typeof (this.escalationSetting as any).validate === 'function') {
      (this.escalationSetting as any).validate();
    }
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(this.groupingSetting && typeof (this.groupingSetting as any).validate === 'function') {
      (this.groupingSetting as any).validate();
    }
    if(this.pushingSetting && typeof (this.pushingSetting as any).validate === 'function') {
      (this.pushingSetting as any).validate();
    }
    if(this.routeSetting && typeof (this.routeSetting as any).validate === 'function') {
      (this.routeSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

