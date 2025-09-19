// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOpaStrategyNewRequestAlarmDetailBaselineItem extends $dara.Model {
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
   * passwd
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

export class UpdateOpaStrategyNewRequestAlarmDetailBaseline extends $dara.Model {
  /**
   * @remarks
   * The baseline check items.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailBaselineItem[];
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
      item: { 'type': 'array', 'itemType': UpdateOpaStrategyNewRequestAlarmDetailBaselineItem },
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

export class UpdateOpaStrategyNewRequestAlarmDetailBuildRiskItem extends $dara.Model {
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

export class UpdateOpaStrategyNewRequestAlarmDetailBuildRisk extends $dara.Model {
  /**
   * @remarks
   * The configuration of image build risk.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailBuildRiskItem[];
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
      item: { 'type': 'array', 'itemType': UpdateOpaStrategyNewRequestAlarmDetailBuildRiskItem },
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

export class UpdateOpaStrategyNewRequestAlarmDetailMaliciousFileItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the malicious sample.
   * 
   * >  You can call the [DescribeMatchedMaliciousNames](~~DescribeMatchedMaliciousNames~~) operation to query the ID.
   * 
   * @example
   * 65201
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

export class UpdateOpaStrategyNewRequestAlarmDetailMaliciousFile extends $dara.Model {
  /**
   * @remarks
   * The malicious samples.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailMaliciousFileItem[];
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
      item: { 'type': 'array', 'itemType': UpdateOpaStrategyNewRequestAlarmDetailMaliciousFileItem },
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

export class UpdateOpaStrategyNewRequestAlarmDetailSensitiveFileItem extends $dara.Model {
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

export class UpdateOpaStrategyNewRequestAlarmDetailSensitiveFile extends $dara.Model {
  /**
   * @remarks
   * The configuration of sensitive file.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailSensitiveFileItem[];
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
      item: { 'type': 'array', 'itemType': UpdateOpaStrategyNewRequestAlarmDetailSensitiveFileItem },
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

export class UpdateOpaStrategyNewRequestAlarmDetailVulItem extends $dara.Model {
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
   * oval:com.redhat.rhsa:def:20227002
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

export class UpdateOpaStrategyNewRequestAlarmDetailVulRiskClass extends $dara.Model {
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

export class UpdateOpaStrategyNewRequestAlarmDetailVul extends $dara.Model {
  /**
   * @remarks
   * The vulnerabilities.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailVulItem[];
  /**
   * @remarks
   * Risk type of vulnerability.
   */
  riskClass?: UpdateOpaStrategyNewRequestAlarmDetailVulRiskClass[];
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
      item: { 'type': 'array', 'itemType': UpdateOpaStrategyNewRequestAlarmDetailVulItem },
      riskClass: { 'type': 'array', 'itemType': UpdateOpaStrategyNewRequestAlarmDetailVulRiskClass },
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

export class UpdateOpaStrategyNewRequestAlarmDetail extends $dara.Model {
  /**
   * @remarks
   * The baseline risks.
   */
  baseline?: UpdateOpaStrategyNewRequestAlarmDetailBaseline;
  /**
   * @remarks
   * The configuration of image build risk.
   */
  buildRisk?: UpdateOpaStrategyNewRequestAlarmDetailBuildRisk;
  /**
   * @remarks
   * The malicious sample risks.
   */
  maliciousFile?: UpdateOpaStrategyNewRequestAlarmDetailMaliciousFile;
  /**
   * @remarks
   * The configuration of sensitive file.
   */
  sensitiveFile?: UpdateOpaStrategyNewRequestAlarmDetailSensitiveFile;
  /**
   * @remarks
   * The vulnerability risks.
   */
  vul?: UpdateOpaStrategyNewRequestAlarmDetailVul;
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
      baseline: UpdateOpaStrategyNewRequestAlarmDetailBaseline,
      buildRisk: UpdateOpaStrategyNewRequestAlarmDetailBuildRisk,
      maliciousFile: UpdateOpaStrategyNewRequestAlarmDetailMaliciousFile,
      sensitiveFile: UpdateOpaStrategyNewRequestAlarmDetailSensitiveFile,
      vul: UpdateOpaStrategyNewRequestAlarmDetailVul,
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

export class UpdateOpaStrategyNewRequestScopes extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster node to which the rule is applied.
   * 
   * >  You can call the [GetOpaStrategyDetailNew](~~GetOpaStrategyDetailNew~~) operation to query the ID of the cluster node to which the rule is applied.
   * 
   * @example
   * ack-1
   */
  ackPolicyInstanceId?: string;
  /**
   * @remarks
   * Specifies whether all namespaces are included. Valid values:
   * 
   * *   **0**: Not all namespaces are included.
   * *   **1**: All namespaces are included.
   * 
   * @example
   * 1
   */
  allNamespace?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the cluster ID.
   * 
   * @example
   * cdcb56a931c**
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

export class UpdateOpaStrategyNewRequest extends $dara.Model {
  /**
   * @remarks
   * The risks that you want to detect by using the rule.
   */
  alarmDetail?: UpdateOpaStrategyNewRequestAlarmDetail;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > This parameter is deprecated. You can use the Scopes parameter to specify a scope in which cluster parameters take effect.
   * 
   * @example
   * c870ec78ecbcb41d2a35c679823ef****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * > This parameter is deprecated.
   * 
   * @example
   * docker-law
   */
  clusterName?: string;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * 4566
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
   * *   **1**: alert
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
  scopes?: UpdateOpaStrategyNewRequestScopes[];
  /**
   * @remarks
   * The ID of the rule.
   * 
   * >  You can call the [ListOpaClusterStrategyNew](https://help.aliyun.com/document_detail/2623574.html) operation to query the ID.
   * 
   * @example
   * 1003
   */
  strategyId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test
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
   * The whitelists.
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
      alarmDetail: UpdateOpaStrategyNewRequestAlarmDetail,
      clusterId: 'string',
      clusterName: 'string',
      description: 'string',
      imageName: { 'type': 'array', 'itemType': 'string' },
      label: { 'type': 'array', 'itemType': 'string' },
      maliciousImage: 'boolean',
      ruleAction: 'number',
      scopes: { 'type': 'array', 'itemType': UpdateOpaStrategyNewRequestScopes },
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

