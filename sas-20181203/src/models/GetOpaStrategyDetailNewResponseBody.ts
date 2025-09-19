// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBaselineItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline check item.
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBaseline extends $dara.Model {
  /**
   * @remarks
   * The information about the baseline check item.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBaselineItem[];
  /**
   * @remarks
   * The risk levels.
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
      item: { 'type': 'array', 'itemType': GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBaselineItem },
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBuildRiskItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the image build risk.
   * 
   * >  You can call the [ListImageBuildRiskItem](~~ListImageBuildRiskItem~~) operation to query the ID of the malicious sample.
   * 
   * @example
   * key
   */
  id?: string;
  /**
   * @remarks
   * The name of the image build risk.
   * 
   * >  You can call the [ListImageBuildRiskItem](~~ListImageBuildRiskItem~~) operation to query the ID of the malicious sample.
   * 
   * @example
   * name
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBuildRisk extends $dara.Model {
  /**
   * @remarks
   * The configuration of image build risk.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBuildRiskItem[];
  /**
   * @remarks
   * The risk levels.
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
      item: { 'type': 'array', 'itemType': GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBuildRiskItem },
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailMaliciousFileItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the malicious sample.
   * 
   * @example
   * 1811
   */
  id?: string;
  /**
   * @remarks
   * The name of the malicious sample.
   * 
   * @example
   * abnormal binary file
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailMaliciousFile extends $dara.Model {
  /**
   * @remarks
   * The information about the malicious sample.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailMaliciousFileItem[];
  /**
   * @remarks
   * The risk levels.
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
      item: { 'type': 'array', 'itemType': GetOpaStrategyDetailNewResponseBodyDataAlarmDetailMaliciousFileItem },
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailSensitiveFileItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the sensitive files.
   * 
   * >  You can call the [GetSensitiveDefineRuleConfig](~~GetSensitiveDefineRuleConfig~~) operation to query the ID of the malicious sample.
   * 
   * @example
   * key
   */
  id?: string;
  /**
   * @remarks
   * The name of the sensitive files.
   * 
   * >  You can call the [GetSensitiveDefineRuleConfig](~~GetSensitiveDefineRuleConfig~~) operation to query the ID of the malicious sample.
   * 
   * @example
   * name
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailSensitiveFile extends $dara.Model {
  /**
   * @remarks
   * The configuration of sensitive file.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailSensitiveFileItem[];
  /**
   * @remarks
   * The risk levels.
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
      item: { 'type': 'array', 'itemType': GetOpaStrategyDetailNewResponseBodyDataAlarmDetailSensitiveFileItem },
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulItem extends $dara.Model {
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
   * The name of the vulnerability.
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulRiskClass extends $dara.Model {
  /**
   * @remarks
   * The ID of the vulnerability types. Valid values:
   * 
   * *   **cve**: system vulnerability
   * *   **app**: application vulnerability
   * 
   * @example
   * cve
   */
  id?: string;
  /**
   * @remarks
   * The name of the vulnerability. Valid values:
   * 
   * *   **system vulnerability**
   * *   **application vulnerability**
   * 
   * @example
   * system vulnerability
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVul extends $dara.Model {
  /**
   * @remarks
   * The information about the vulnerability.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulItem[];
  /**
   * @remarks
   * Risk type of vulnerability.
   */
  riskClass?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulRiskClass[];
  /**
   * @remarks
   * The risk levels.
   */
  riskLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      riskClass: 'RiskClass',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulItem },
      riskClass: { 'type': 'array', 'itemType': GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulRiskClass },
      riskLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.riskClass)) {
      $dara.Model.validateArray(this.riskClass);
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetail extends $dara.Model {
  /**
   * @remarks
   * The baseline check configuration.
   */
  baseline?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBaseline;
  /**
   * @remarks
   * The configuration of image build risk.
   */
  buildRisk?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBuildRisk;
  /**
   * @remarks
   * The configuration of malicious samples.
   */
  maliciousFile?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailMaliciousFile;
  /**
   * @remarks
   * The configuration of sensitive file.
   */
  sensitiveFile?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailSensitiveFile;
  /**
   * @remarks
   * The vulnerability configuration.
   */
  vul?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVul;
  static names(): { [key: string]: string } {
    return {
      baseline: 'Baseline',
      buildRisk: 'BuildRisk',
      maliciousFile: 'MaliciousFile',
      sensitiveFile: 'SensitiveFile',
      vul: 'Vul',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBaseline,
      buildRisk: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBuildRisk,
      maliciousFile: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailMaliciousFile,
      sensitiveFile: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailSensitiveFile,
      vul: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVul,
    };
  }

  validate() {
    if(this.baseline && typeof (this.baseline as any).validate === 'function') {
      (this.baseline as any).validate();
    }
    if(this.buildRisk && typeof (this.buildRisk as any).validate === 'function') {
      (this.buildRisk as any).validate();
    }
    if(this.maliciousFile && typeof (this.maliciousFile as any).validate === 'function') {
      (this.maliciousFile as any).validate();
    }
    if(this.sensitiveFile && typeof (this.sensitiveFile as any).validate === 'function') {
      (this.sensitiveFile as any).validate();
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

export class GetOpaStrategyDetailNewResponseBodyDataScopes extends $dara.Model {
  /**
   * @remarks
   * The rule instance ID of the cluster.
   * 
   * @example
   * ack-0
   */
  ackPolicyInstanceId?: string;
  /**
   * @remarks
   * Indicates whether all namespaces are included. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  allNamespace?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c1fdb5fd8d**7163
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespaces.
   */
  namespaceList?: string[];
  static names(): { [key: string]: string } {
    return {
      ackPolicyInstanceId: 'AckPolicyInstanceId',
      allNamespace: 'AllNamespace',
      clusterId: 'ClusterId',
      namespaceList: 'NamespaceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackPolicyInstanceId: 'string',
      allNamespace: 'number',
      clusterId: 'string',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.namespaceList)) {
      $dara.Model.validateArray(this.namespaceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpaStrategyDetailNewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The rule configuration.
   */
  alarmDetail?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetail;
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
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The page number. Default value: **1**. Pages start from page 1.
   * 
   * @example
   * 4
   */
  currentPage?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Custom defense configuration
   */
  description?: string;
  /**
   * @remarks
   * The image names.
   */
  imageName?: string[];
  /**
   * @remarks
   * The image tags.
   */
  label?: string[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Indicates whether the rule supports malicious Internet images. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  maliciousImage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The action that is performed when the rule is hit. Valid values:
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
   * The application scope.
   */
  scopes?: GetOpaStrategyDetailNewResponseBodyDataScopes[];
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
   * test001
   */
  strategyName?: string;
  /**
   * @remarks
   * The ID of the rule template.
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
   * true
   */
  unScanedImage?: boolean;
  /**
   * @remarks
   * The image tags that are added to the whitelist.
   */
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      alarmDetail: 'AlarmDetail',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      currentPage: 'CurrentPage',
      description: 'Description',
      imageName: 'ImageName',
      label: 'Label',
      lang: 'Lang',
      maliciousImage: 'MaliciousImage',
      pageSize: 'PageSize',
      ruleAction: 'RuleAction',
      scopes: 'Scopes',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      strategyTemplateId: 'StrategyTemplateId',
      unScanedImage: 'UnScanedImage',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmDetail: GetOpaStrategyDetailNewResponseBodyDataAlarmDetail,
      clusterId: 'string',
      clusterName: 'string',
      currentPage: 'number',
      description: 'string',
      imageName: { 'type': 'array', 'itemType': 'string' },
      label: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      maliciousImage: 'boolean',
      pageSize: 'number',
      ruleAction: 'number',
      scopes: { 'type': 'array', 'itemType': GetOpaStrategyDetailNewResponseBodyDataScopes },
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
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
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

export class GetOpaStrategyDetailNewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetOpaStrategyDetailNewResponseBodyData;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E819FD71-D240-5E54-AA7F-20FED2ECBEB6
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOpaStrategyDetailNewResponseBodyData,
      httpStatusCode: 'number',
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

