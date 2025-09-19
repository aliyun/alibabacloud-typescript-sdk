// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckDetailResponseBodyAssistInfo extends $dara.Model {
  /**
   * @remarks
   * The link to the help information about the risk item when the Type parameter is set to link.
   * 
   * @example
   * https://www.alibabacloud.com/help/en/resource-access-management/latest/faq-about-ram-users
   */
  link?: string;
  /**
   * @remarks
   * The type of the help information about the risk item. Valid values:
   * 
   * *   **text**
   * *   **link**
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The content in the help information about the risk item when the Type parameter is set to text.
   * 
   * @example
   * Configure an IP address whitelist
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      type: 'string',
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

export class GetCheckDetailResponseBodyCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * The default value of the custom configuration item. The value is a string.
   * 
   * @example
   * 12
   */
  defaultValue?: string;
  /**
   * @remarks
   * The name of the custom configuration item, which is unique in a check item.
   * 
   * @example
   * SessionTimeMax
   */
  name?: string;
  /**
   * @remarks
   * The display name of the custom configuration item for internationalization.
   * 
   * @example
   * Maximum session time
   */
  showName?: string;
  /**
   * @remarks
   * The type of the custom configuration item. The value is a JSON string.
   * 
   * @example
   * {\\"type\\":\\"NUMBER\\",\\"range\\":[1,24]}
   */
  typeDefine?: string;
  /**
   * @remarks
   * The value of the custom configuration item. The value is a string.
   * 
   * @example
   * 11
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      name: 'Name',
      showName: 'ShowName',
      typeDefine: 'TypeDefine',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      name: 'string',
      showName: 'string',
      typeDefine: 'string',
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

export class GetCheckDetailResponseBodyDescription extends $dara.Model {
  /**
   * @remarks
   * The link to the description of the check item.
   * 
   * @example
   * https://www.alibabacloud.com/help/en/object-storage-service/latest/tutorial-implement-data-sharing-across-departments-based-on-bucket-policies
   */
  link?: string;
  /**
   * @remarks
   * The description type of the check item. The value is fixed as text.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The content in the description of the check item.
   * 
   * @example
   * The MSE instance does not enable authentication by default. If public network access is enabled at the same time, the data in the configuration center may be dragged and there is a security risk.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      type: 'string',
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

export class GetCheckDetailResponseBodyRepairSettingFlowStep extends $dara.Model {
  /**
   * @remarks
   * The text description of the fixing step.
   * 
   * @example
   * The first step is to open the calling interface.
   */
  showText?: string;
  /**
   * @remarks
   * The sequence number of the fixing step.
   * 
   * @example
   * 1
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      showText: 'ShowText',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showText: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckDetailResponseBodyRepairSettingRepairConfigs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the value of the parameter is displayed in the console. Valid values:
   * 
   * *   0: The historical value and real-time value of the parameter are displayed.
   * *   1: Only the real-time value of the parameter is displayed.
   * *   2: The value of the parameter is not displayed in the console.
   * 
   * @example
   * 0
   */
  consoleParamType?: string;
  /**
   * @remarks
   * Indicates whether custom configurations of the fixing parameters are supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  customFlag?: boolean;
  /**
   * @remarks
   * Indicates whether data needs to be encrypted during transmission. Valid values:
   * 
   * *   0: Data does not need to be encrypted during transmission.
   * *   1: Data needs to be encrypted during transmission.
   * *   2: Data needs to be encrypted during transmission, and the user must perform secondary confirmation.
   * 
   * @example
   * 1
   */
  dataTransformType?: string;
  /**
   * @remarks
   * The default value of the parameter. The value is a string.
   * 
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @remarks
   * Indicates whether this parameter is specified by the user. Valid values:
   * 
   * *   0: The default value is used.
   * *   1: This parameter is required, and no default value is specified.
   * *   2: This parameter can be left empty.
   * 
   * @example
   * 1
   */
  emptyParamSwitch?: string;
  /**
   * @remarks
   * The fixing parameters that are not compatible with this parameter.
   */
  exclusiveName?: string[];
  /**
   * @remarks
   * The ID of the fixing workflow.
   * 
   * @example
   * 64312d3ee19d470a9b54393dab****
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be unique within the check item.
   * 
   * @example
   * navicat
   */
  name?: string;
  /**
   * @remarks
   * The display name of the parameter.
   * 
   * @example
   * port
   */
  showName?: string;
  /**
   * @remarks
   * The type of the parameter. The value is a JSON string.
   * 
   * @example
   * {\\"type\\":\\"NUMBER\\",\\"range\\":[1,24]}
   */
  typeDefine?: string;
  /**
   * @remarks
   * The type of the parameter. Valid values:
   * 
   * *   1: asset parameters that are required during fixing.
   * *   2: user-provided parameters that are required during fixing.
   * *   3: parameters that are temporarily provided by the user.
   * 
   * @example
   * 1
   */
  usageType?: string;
  /**
   * @remarks
   * The user-configured value of the parameter. The value is a string.
   * 
   * @example
   * 2
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      consoleParamType: 'ConsoleParamType',
      customFlag: 'CustomFlag',
      dataTransformType: 'DataTransformType',
      defaultValue: 'DefaultValue',
      emptyParamSwitch: 'EmptyParamSwitch',
      exclusiveName: 'ExclusiveName',
      flowId: 'FlowId',
      name: 'Name',
      showName: 'ShowName',
      typeDefine: 'TypeDefine',
      usageType: 'UsageType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleParamType: 'string',
      customFlag: 'boolean',
      dataTransformType: 'string',
      defaultValue: 'string',
      emptyParamSwitch: 'string',
      exclusiveName: { 'type': 'array', 'itemType': 'string' },
      flowId: 'string',
      name: 'string',
      showName: 'string',
      typeDefine: 'string',
      usageType: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exclusiveName)) {
      $dara.Model.validateArray(this.exclusiveName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckDetailResponseBodyRepairSetting extends $dara.Model {
  /**
   * @remarks
   * The description of the fixing workflow.
   */
  flowStep?: GetCheckDetailResponseBodyRepairSettingFlowStep[];
  /**
   * @remarks
   * The configurations of the fixing parameters.
   */
  repairConfigs?: GetCheckDetailResponseBodyRepairSettingRepairConfigs[];
  /**
   * @remarks
   * Indicates whether a restart is required after the fixing. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  repairReset?: boolean;
  /**
   * @remarks
   * Indicates whether the check item supports the quick fix feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  repairSupport?: boolean;
  /**
   * @remarks
   * The fixing type that is supported. Valid values:
   * 
   * *   **1**: The fixing and rollback are supported.
   * *   **2**: The fixing is supported, but the rollback is not supported.
   * *   **3**: The fixing must be performed on a third-party platform.
   * 
   * @example
   * 1
   */
  repairSupportType?: number;
  static names(): { [key: string]: string } {
    return {
      flowStep: 'FlowStep',
      repairConfigs: 'RepairConfigs',
      repairReset: 'RepairReset',
      repairSupport: 'RepairSupport',
      repairSupportType: 'RepairSupportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowStep: { 'type': 'array', 'itemType': GetCheckDetailResponseBodyRepairSettingFlowStep },
      repairConfigs: { 'type': 'array', 'itemType': GetCheckDetailResponseBodyRepairSettingRepairConfigs },
      repairReset: 'boolean',
      repairSupport: 'boolean',
      repairSupportType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flowStep)) {
      $dara.Model.validateArray(this.flowStep);
    }
    if(Array.isArray(this.repairConfigs)) {
      $dara.Model.validateArray(this.repairConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckDetailResponseBodySolution extends $dara.Model {
  /**
   * @remarks
   * The link to the solution to handle the risk item when the Type parameter is set to link.
   * 
   * @example
   * https://www.alibabacloud.com/help/en/object-storage-service/latest/tutorial-implement-data-sharing-across-departments-based-on-bucket-policies
   */
  link?: string;
  /**
   * @remarks
   * The type of the solution to handle the risk item. Valid values:
   * 
   * *   **text**
   * *   **link**
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The content of the solution to handle the risk item when the Type parameter is set to text.
   * 
   * @example
   * Enter the MSE product console - registration and configuration center - instance list, click the corresponding instance name to enter the instance details, find the public network whitelist setting option in the basic information, and configure the whitelist according to business needs. It is forbidden to configure 0.0.0.0 or the whitelist as null.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      type: 'string',
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

export class GetCheckDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The help information about the check item.
   */
  assistInfo?: GetCheckDetailResponseBodyAssistInfo;
  /**
   * @remarks
   * The custom configuration items of the check item.
   */
  customConfigs?: GetCheckDetailResponseBodyCustomConfigs[];
  /**
   * @remarks
   * The description of the check item.
   */
  description?: GetCheckDetailResponseBodyDescription;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  repairReset?: string;
  /**
   * @remarks
   * The fixing parameter configurations of the check item.
   */
  repairSetting?: GetCheckDetailResponseBodyRepairSetting;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  repairSupportType?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15A6ED6A-DBFE-5255-A248-289907809BEC
   */
  requestId?: string;
  /**
   * @remarks
   * The solution to handle the risk item.
   */
  solution?: GetCheckDetailResponseBodySolution;
  static names(): { [key: string]: string } {
    return {
      assistInfo: 'AssistInfo',
      customConfigs: 'CustomConfigs',
      description: 'Description',
      repairReset: 'RepairReset',
      repairSetting: 'RepairSetting',
      repairSupportType: 'RepairSupportType',
      requestId: 'RequestId',
      solution: 'Solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistInfo: GetCheckDetailResponseBodyAssistInfo,
      customConfigs: { 'type': 'array', 'itemType': GetCheckDetailResponseBodyCustomConfigs },
      description: GetCheckDetailResponseBodyDescription,
      repairReset: 'string',
      repairSetting: GetCheckDetailResponseBodyRepairSetting,
      repairSupportType: 'number',
      requestId: 'string',
      solution: GetCheckDetailResponseBodySolution,
    };
  }

  validate() {
    if(this.assistInfo && typeof (this.assistInfo as any).validate === 'function') {
      (this.assistInfo as any).validate();
    }
    if(Array.isArray(this.customConfigs)) {
      $dara.Model.validateArray(this.customConfigs);
    }
    if(this.description && typeof (this.description as any).validate === 'function') {
      (this.description as any).validate();
    }
    if(this.repairSetting && typeof (this.repairSetting as any).validate === 'function') {
      (this.repairSetting as any).validate();
    }
    if(this.solution && typeof (this.solution as any).validate === 'function') {
      (this.solution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

