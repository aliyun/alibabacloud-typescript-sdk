// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpaStrategyNewRequestAlarmDetailBaselineItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline check item.
   * 
   * >  You can call the [GetOpaClusterBaseLineList](https://help.aliyun.com/document_detail/2539883.html) operation to query the ID.
   * 
   * @example
   * hc.image.checklist.identify.hc_exploit_couchdb_linux.item
   */
  id?: string;
  /**
   * @remarks
   * The name of the baseline check item.
   * 
   * >  You can call the [GetOpaClusterBaseLineList](https://help.aliyun.com/document_detail/2539883.html) operation to query the name.
   * 
   * @example
   * Unauthorized access to CouchDB configuration risk
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

export class CreateOpaStrategyNewRequestAlarmDetailBaseline extends $dara.Model {
  /**
   * @remarks
   * The baseline check items.
   */
  item?: CreateOpaStrategyNewRequestAlarmDetailBaselineItem[];
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
      item: { 'type': 'array', 'itemType': CreateOpaStrategyNewRequestAlarmDetailBaselineItem },
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

export class CreateOpaStrategyNewRequestAlarmDetailBuildRiskItem extends $dara.Model {
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

export class CreateOpaStrategyNewRequestAlarmDetailBuildRisk extends $dara.Model {
  /**
   * @remarks
   * The configuration of image build risk.
   */
  item?: CreateOpaStrategyNewRequestAlarmDetailBuildRiskItem[];
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
      item: { 'type': 'array', 'itemType': CreateOpaStrategyNewRequestAlarmDetailBuildRiskItem },
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

export class CreateOpaStrategyNewRequestAlarmDetailMaliciousFileItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the malicious sample.
   * 
   * >  You can call the [DescribeMatchedMaliciousNames](~~DescribeMatchedMaliciousNames~~) operation to query the ID.
   * 
   * @example
   * 3685699
   */
  id?: string;
  /**
   * @remarks
   * The name of the malicious sample.
   * 
   * >  You can call the [DescribeMatchedMaliciousNames](~~DescribeMatchedMaliciousNames~~) operation to query the name.
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

export class CreateOpaStrategyNewRequestAlarmDetailMaliciousFile extends $dara.Model {
  /**
   * @remarks
   * The malicious samples.
   */
  item?: CreateOpaStrategyNewRequestAlarmDetailMaliciousFileItem[];
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
      item: { 'type': 'array', 'itemType': CreateOpaStrategyNewRequestAlarmDetailMaliciousFileItem },
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

export class CreateOpaStrategyNewRequestAlarmDetailSensitiveFileItem extends $dara.Model {
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

export class CreateOpaStrategyNewRequestAlarmDetailSensitiveFile extends $dara.Model {
  /**
   * @remarks
   * The configuration of sensitive file.
   */
  item?: CreateOpaStrategyNewRequestAlarmDetailSensitiveFileItem[];
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
      item: { 'type': 'array', 'itemType': CreateOpaStrategyNewRequestAlarmDetailSensitiveFileItem },
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

export class CreateOpaStrategyNewRequestAlarmDetailVulItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the vulnerability.
   * 
   * >  You can call the [DescribeVulListPage](https://help.aliyun.com/document_detail/471928.html) operation to query the ID.
   * 
   * @example
   * CVE-2023-36034
   */
  id?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * >  You can call the [DescribeVulListPage](https://help.aliyun.com/document_detail/471928.html) operation to query the name.
   * 
   * @example
   * Microsoft Edge vul
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

export class CreateOpaStrategyNewRequestAlarmDetailVulRiskClass extends $dara.Model {
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

export class CreateOpaStrategyNewRequestAlarmDetailVul extends $dara.Model {
  /**
   * @remarks
   * The vulnerabilities.
   */
  item?: CreateOpaStrategyNewRequestAlarmDetailVulItem[];
  /**
   * @remarks
   * Risk type of vulnerability.
   */
  riskClass?: CreateOpaStrategyNewRequestAlarmDetailVulRiskClass[];
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
      item: { 'type': 'array', 'itemType': CreateOpaStrategyNewRequestAlarmDetailVulItem },
      riskClass: { 'type': 'array', 'itemType': CreateOpaStrategyNewRequestAlarmDetailVulRiskClass },
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

export class CreateOpaStrategyNewRequestAlarmDetail extends $dara.Model {
  /**
   * @remarks
   * The baseline risks.
   */
  baseline?: CreateOpaStrategyNewRequestAlarmDetailBaseline;
  /**
   * @remarks
   * The configuration of image build risk.
   */
  buildRisk?: CreateOpaStrategyNewRequestAlarmDetailBuildRisk;
  /**
   * @remarks
   * The malicious sample risks.
   */
  maliciousFile?: CreateOpaStrategyNewRequestAlarmDetailMaliciousFile;
  /**
   * @remarks
   * The configuration of sensitive file.
   */
  sensitiveFile?: CreateOpaStrategyNewRequestAlarmDetailSensitiveFile;
  /**
   * @remarks
   * The vulnerability risks.
   */
  vul?: CreateOpaStrategyNewRequestAlarmDetailVul;
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
      baseline: CreateOpaStrategyNewRequestAlarmDetailBaseline,
      buildRisk: CreateOpaStrategyNewRequestAlarmDetailBuildRisk,
      maliciousFile: CreateOpaStrategyNewRequestAlarmDetailMaliciousFile,
      sensitiveFile: CreateOpaStrategyNewRequestAlarmDetailSensitiveFile,
      vul: CreateOpaStrategyNewRequestAlarmDetailVul,
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

export class CreateOpaStrategyNewRequestScopes extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster node to which the rule is applied.
   * 
   * > This parameter is not required when you create the instance.
   * 
   * @example
   * ack-p-1
   */
  ackPolicyInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to include all namespaces. Valid values:
   * 
   * *   **1**: includes all namespaces.
   * *   **0**: does not include all namespaces.
   * 
   * @example
   * 1
   */
  allNamespace?: number;
  /**
   * @remarks
   * The ID of the cluster that is specified in the rule.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/421736.html) operation to query the cluster ID.
   * 
   * @example
   * cc50d***015d2
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespaces.
   * 
   * > This parameter is valid only when the AllNamespace parameter is set to 0.
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

export class CreateOpaStrategyNewRequest extends $dara.Model {
  /**
   * @remarks
   * The risks that you want to detect by using the rule.
   */
  alarmDetail?: CreateOpaStrategyNewRequestAlarmDetail;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > This parameter is deprecated.
   * 
   * @example
   * cfa7e2fb8c221483ba59e098c34c6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * > This parameter is deprecated.
   * 
   * @example
   * *
   */
  clusterName?: string;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * default policy
   */
  description?: string;
  /**
   * @remarks
   * The image names.
   */
  imageName?: string[];
  /**
   * @remarks
   * The container tags.
   */
  label?: string[];
  /**
   * @remarks
   * Specifies whether the rule supports malicious Internet images. Valid values:
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
   * The application scope of the rule.
   */
  scopes?: CreateOpaStrategyNewRequestScopes[];
  /**
   * @remarks
   * The rule ID.
   * 
   * >  You can call the [ListOpaClusterStrategyNew](https://help.aliyun.com/document_detail/2623574.html) operation to query the rule ID.
   * 
   * > This parameter is invalid when you create a rule.
   * 
   * @example
   * 16
   */
  strategyId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * default
   */
  strategyName?: string;
  /**
   * @remarks
   * The ID of the rule template.
   * 
   * >  You can call the [GetOpaStrategyTemplateSummary](https://help.aliyun.com/document_detail/2539952.html) operation to query the ID of the rule template.
   * 
   * @example
   * 109
   */
  strategyTemplateId?: number;
  /**
   * @remarks
   * Specifies whether the rule supports unscanned images. Valid values:
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
   * The whitelist.
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
      alarmDetail: CreateOpaStrategyNewRequestAlarmDetail,
      clusterId: 'string',
      clusterName: 'string',
      description: 'string',
      imageName: { 'type': 'array', 'itemType': 'string' },
      label: { 'type': 'array', 'itemType': 'string' },
      maliciousImage: 'boolean',
      ruleAction: 'number',
      scopes: { 'type': 'array', 'itemType': CreateOpaStrategyNewRequestScopes },
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

