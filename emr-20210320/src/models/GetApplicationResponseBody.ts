// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute extends $dara.Model {
  /**
   * @remarks
   * 值表述。
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 值步长。
   * 
   * @example
   * 1
   */
  valueIncrementStep?: string;
  /**
   * @remarks
   * 最大值。
   * 
   * @example
   * 100
   */
  valueMaximum?: string;
  /**
   * @remarks
   * 最小值。
   * 
   * @example
   * 1
   */
  valueMinimum?: string;
  /**
   * @remarks
   * 属性值类型。
   * 
   * @example
   * int
   */
  valueType?: string;
  /**
   * @remarks
   * 值单位。
   * 
   * @example
   * number
   */
  valueUnit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      valueIncrementStep: 'ValueIncrementStep',
      valueMaximum: 'ValueMaximum',
      valueMinimum: 'ValueMinimum',
      valueType: 'ValueType',
      valueUnit: 'ValueUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      valueIncrementStep: 'string',
      valueMaximum: 'string',
      valueMinimum: 'string',
      valueType: 'string',
      valueUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationActionsActionParams extends $dara.Model {
  /**
   * @remarks
   * 动作参数描述。
   * 
   * @example
   * start
   */
  description?: string;
  /**
   * @remarks
   * 动作参数KEY。
   * 
   * @example
   * timeout
   */
  key?: string;
  /**
   * @remarks
   * 动作参数属性。
   */
  valueAttribute?: GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      valueAttribute: 'ValueAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      valueAttribute: GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute,
    };
  }

  validate() {
    if(this.valueAttribute && typeof (this.valueAttribute as any).validate === 'function') {
      (this.valueAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationActions extends $dara.Model {
  /**
   * @remarks
   * 操作名称。
   * 
   * @example
   * decommission
   */
  actionName?: string;
  /**
   * @remarks
   * 操作参数。
   */
  actionParams?: GetApplicationResponseBodyApplicationActionsActionParams[];
  /**
   * @remarks
   * 命令。
   * 
   * @example
   * decommission
   */
  command?: string;
  /**
   * @remarks
   * 组件名称。
   * 
   * @example
   * DataNode
   */
  componentName?: string;
  /**
   * @remarks
   * 操作描述。
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 执行范围。
   * 
   * @example
   * COMPONENT_INSTANCE
   */
  runActionScope?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionParams: 'ActionParams',
      command: 'Command',
      componentName: 'ComponentName',
      description: 'Description',
      runActionScope: 'RunActionScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionParams: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationActionsActionParams },
      command: 'string',
      componentName: 'string',
      description: 'string',
      runActionScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionParams)) {
      $dara.Model.validateArray(this.actionParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * 操作列表。
   */
  actions?: GetApplicationResponseBodyApplicationActions[];
  /**
   * @remarks
   * 应用名称。
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * 应用操作状态。
   * 
   * @example
   * RUNNING
   */
  applicationState?: string;
  /**
   * @remarks
   * 应用版本。
   * 
   * @example
   * 2.8.1
   */
  applicationVersion?: string;
  /**
   * @remarks
   * 社区版本。
   * 
   * @example
   * 2.8.1
   */
  communityVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      applicationName: 'ApplicationName',
      applicationState: 'ApplicationState',
      applicationVersion: 'ApplicationVersion',
      communityVersion: 'CommunityVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationActions },
      applicationName: 'string',
      applicationState: 'string',
      applicationVersion: 'string',
      communityVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $dara.Model {
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 9E3A7161-EB7B-172B-8D18-FFB06BA3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

