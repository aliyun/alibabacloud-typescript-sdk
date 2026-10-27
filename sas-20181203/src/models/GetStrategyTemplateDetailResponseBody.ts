// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStrategyTemplateDetailResponseBodyDataAlarmDetailBaselineItem extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the baseline check item.
   * 
   * @example
   * ak_leak
   */
  id?: string;
  /**
   * @remarks
   * The name of the baseline check item.
   * 
   * @example
   * Access Key plaintext storage
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStrategyTemplateDetailResponseBodyDataAlarmDetailBaseline extends $dara.Model {
  /**
   * @remarks
   * The list of baseline items.
   */
  item?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailBaselineItem[];
  /**
   * @remarks
   * The list of baseline risk levels. Valid values:
   * 
   * - **high**: High risk.
   * - **medium**: Medium risk.
   * - **low**: Low risk.
   */
  riskLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': GetStrategyTemplateDetailResponseBodyDataAlarmDetailBaselineItem },
      riskLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.riskLevel)) {
      $dara.Model.validateArray(this.riskLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStrategyTemplateDetailResponseBodyDataAlarmDetailMaliciousFileItem extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the malicious sample.
   * 
   * @example
   * test
   */
  id?: string;
  /**
   * @remarks
   * The name of the malicious sample.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStrategyTemplateDetailResponseBodyDataAlarmDetailMaliciousFile extends $dara.Model {
  /**
   * @remarks
   * The list of malicious sample items.
   */
  item?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailMaliciousFileItem[];
  /**
   * @remarks
   * The list of malicious sample risk levels.
   */
  riskLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': GetStrategyTemplateDetailResponseBodyDataAlarmDetailMaliciousFileItem },
      riskLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.riskLevel)) {
      $dara.Model.validateArray(this.riskLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStrategyTemplateDetailResponseBodyDataAlarmDetailVulItem extends $dara.Model {
  /**
   * @remarks
   * The vulnerability ID.
   * 
   * @example
   * AVD-2023-1680169
   */
  id?: string;
  /**
   * @remarks
   * The vulnerability name.
   * 
   * @example
   * ezOffice evoInterfaceServlet Info Leak
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStrategyTemplateDetailResponseBodyDataAlarmDetailVul extends $dara.Model {
  /**
   * @remarks
   * The list of vulnerability items.
   */
  item?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailVulItem[];
  /**
   * @remarks
   * The list of vulnerability risk levels.
   */
  riskLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': GetStrategyTemplateDetailResponseBodyDataAlarmDetailVulItem },
      riskLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.riskLevel)) {
      $dara.Model.validateArray(this.riskLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStrategyTemplateDetailResponseBodyDataAlarmDetail extends $dara.Model {
  /**
   * @remarks
   * The baseline rule configuration information.
   */
  baseline?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailBaseline;
  /**
   * @remarks
   * The malicious sample rule configuration information.
   */
  maliciousFile?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailMaliciousFile;
  /**
   * @remarks
   * The vulnerability rule configuration information.
   */
  vul?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailVul;
  static names(): { [key: string]: string } {
    return {
      baseline: 'Baseline',
      maliciousFile: 'MaliciousFile',
      vul: 'Vul',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: GetStrategyTemplateDetailResponseBodyDataAlarmDetailBaseline,
      maliciousFile: GetStrategyTemplateDetailResponseBodyDataAlarmDetailMaliciousFile,
      vul: GetStrategyTemplateDetailResponseBodyDataAlarmDetailVul,
    };
  }

  validate() {
    if(this.baseline && typeof (this.baseline as any).validate === 'function') {
      (this.baseline as any).validate();
    }
    if(this.maliciousFile && typeof (this.maliciousFile as any).validate === 'function') {
      (this.maliciousFile as any).validate();
    }
    if(this.vul && typeof (this.vul as any).validate === 'function') {
      (this.vul as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStrategyTemplateDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The rule configuration information.
   */
  alarmDetail?: GetStrategyTemplateDetailResponseBodyDataAlarmDetail;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8ca91e0907d94efaba7fb0827eb9****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * hhht-cluster-02
   */
  clusterName?: string;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Custom defense configuration
   */
  description?: string;
  /**
   * @remarks
   * The list of image names.
   */
  imageName?: string[];
  /**
   * @remarks
   * The list of container labels.
   */
  label?: string[];
  /**
   * @remarks
   * Specifies whether the rule supports malicious images from the Internet. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * false
   */
  maliciousImage?: boolean;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespace?: string[];
  /**
   * @remarks
   * The rule action. Valid values:
   * - **1**: Alert.
   * - **2**: Block.
   * - **3**: Allow.
   * 
   * @example
   * 1
   */
  ruleAction?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1005
   */
  strategyId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * Blank template
   */
  strategyName?: string;
  /**
   * @remarks
   * The ID of the template used by the rule.
   * 
   * @example
   * 1204
   */
  strategyTemplateId?: number;
  /**
   * @remarks
   * Specifies whether the rule supports unscanned images. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * false
   */
  unScanedImage?: boolean;
  /**
   * @remarks
   * The list of image tag whitelists.
   */
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      alarmDetail: 'AlarmDetail',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      description: 'Description',
      imageName: 'ImageName',
      label: 'Label',
      maliciousImage: 'MaliciousImage',
      namespace: 'Namespace',
      ruleAction: 'RuleAction',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      strategyTemplateId: 'StrategyTemplateId',
      unScanedImage: 'UnScanedImage',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmDetail: GetStrategyTemplateDetailResponseBodyDataAlarmDetail,
      clusterId: 'string',
      clusterName: 'string',
      description: 'string',
      imageName: { 'type': 'array', 'itemType': 'string' },
      label: { 'type': 'array', 'itemType': 'string' },
      maliciousImage: 'boolean',
      namespace: { 'type': 'array', 'itemType': 'string' },
      ruleAction: 'number',
      strategyId: 'number',
      strategyName: 'string',
      strategyTemplateId: 'number',
      unScanedImage: 'boolean',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.alarmDetail && typeof (this.alarmDetail as any).validate === 'function') {
      (this.alarmDetail as any).validate();
    }
    if(Array.isArray(this.imageName)) {
      $dara.Model.validateArray(this.imageName);
    }
    if(Array.isArray(this.label)) {
      $dara.Model.validateArray(this.label);
    }
    if(Array.isArray(this.namespace)) {
      $dara.Model.validateArray(this.namespace);
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

export class GetStrategyTemplateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success, and any other value indicates failure. You can use this field to identify the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The template details.
   */
  data?: GetStrategyTemplateDetailResponseBodyData;
  /**
   * @remarks
   * The detailed information about the error code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot issues.
   * 
   * @example
   * 1E36BEEA-0B27-58CC-8319-50279203B048
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetStrategyTemplateDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

