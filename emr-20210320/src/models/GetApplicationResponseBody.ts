// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute extends $dara.Model {
  /**
   * @remarks
   * Value description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The size of the value increment.
   * 
   * @example
   * 1
   */
  valueIncrementStep?: string;
  /**
   * @remarks
   * The maximum range of values.
   * 
   * @example
   * 100
   */
  valueMaximum?: string;
  /**
   * @remarks
   * The minimum range of values.
   * 
   * @example
   * 1
   */
  valueMinimum?: string;
  /**
   * @remarks
   * The value type of the column.
   * 
   * @example
   * int
   */
  valueType?: string;
  /**
   * @remarks
   * The unit of the value.
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
   * Description
   * 
   * @example
   * start
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * timeout
   */
  key?: string;
  /**
   * @remarks
   * The parameter value attribute.
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
   * The action name.
   * 
   * @example
   * decommission
   */
  actionName?: string;
  /**
   * @remarks
   * The list of action parameters.
   */
  actionParams?: GetApplicationResponseBodyApplicationActionsActionParams[];
  /**
   * @remarks
   * The action command.
   * 
   * @example
   * decommission
   */
  command?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * DataNode
   */
  componentName?: string;
  /**
   * @remarks
   * The description of the action.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The execution scope. Valid values:
   * 
   * *   APPLICATION: the application scope.
   * *   COMPONENT: the component scope.
   * *   COMPONENT_INSTANCE: the component instance scope.
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
   * The list of actions supported by the application.
   */
  actions?: GetApplicationResponseBodyApplicationActions[];
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * The status of the application.
   * 
   * @example
   * RUNNING
   */
  applicationState?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 2.8.1
   */
  applicationVersion?: string;
  /**
   * @remarks
   * The community version.
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
  /**
   * @remarks
   * The application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The request ID.
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

