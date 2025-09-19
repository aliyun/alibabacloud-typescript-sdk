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
   * The baseline items.
   */
  item?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailBaselineItem[];
  /**
   * @remarks
   * The severities of the baselines. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
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
   * The items on which malicious samples are detected.
   */
  item?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailMaliciousFileItem[];
  /**
   * @remarks
   * The severities of the malicious samples.
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
   * The ID of the vulnerability.
   * 
   * @example
   * AVD-2023-1680169
   */
  id?: string;
  /**
   * @remarks
   * The alias of the vulnerability.
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
   * The items on which vulnerabilities are detected.
   */
  item?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailVulItem[];
  /**
   * @remarks
   * The severities of the vulnerabilities.
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
   * The configuration of the baseline.
   */
  baseline?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailBaseline;
  /**
   * @remarks
   * The configuration of the alert rule for the malicious sample.
   */
  maliciousFile?: GetStrategyTemplateDetailResponseBodyDataAlarmDetailMaliciousFile;
  /**
   * @remarks
   * The configuration of the vulnerability detection rule.
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
   * The configuration of the rule.
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
   * The name of the cluster.
   * 
   * @example
   * hhht-cluster-02
   */
  clusterName?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Custom defense configuration
   */
  description?: string;
  /**
   * @remarks
   * The names of images.
   */
  imageName?: string[];
  /**
   * @remarks
   * The tags that are added to the containers.
   */
  label?: string[];
  /**
   * @remarks
   * Indicates whether the rule supports malicious Internet images. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  maliciousImage?: boolean;
  /**
   * @remarks
   * The namespaces.
   */
  namespace?: string[];
  /**
   * @remarks
   * The action on requests. Valid values:
   * 
   * *   **1**: trigger alerts
   * *   **2**: block
   * *   **3**: allow
   * 
   * @example
   * 1
   */
  ruleAction?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1005
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Blank template
   */
  strategyName?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 1204
   */
  strategyTemplateId?: number;
  /**
   * @remarks
   * Indicates whether the rule supports unscanned images. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  unScanedImage?: boolean;
  /**
   * @remarks
   * The whitelists of tags that are added to images.
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
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the template.
   */
  data?: GetStrategyTemplateDetailResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E36BEEA-0B27-58CC-8319-50279203B048
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

