// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOpaStrategyNewRequestAlarmDetailBaselineItem extends $dara.Model {
  /**
   * @remarks
   * The baseline check item ID.
   * > Call the [GetOpaClusterBaseLineList](https://help.aliyun.com/document_detail/2539883.html) operation to query this value.
   * 
   * @example
   * hc.image.checklist.identify.hc_exploit_couchdb_linux.item
   */
  id?: string;
  /**
   * @remarks
   * The baseline check item name.
   * > Call the [GetOpaClusterBaseLineList](https://help.aliyun.com/document_detail/2539883.html) operation to query this value.
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
   * The baseline item information.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailBaselineItem[];
  /**
   * @remarks
   * The list of risk levels.
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
   * The risky image build command type ID.
   * > Call the [ListImageBuildRiskItem](~~ListImageBuildRiskItem~~) operation to query this value.
   * 
   * @example
   * key
   */
  id?: string;
  /**
   * @remarks
   * The risky image build command type name.
   * > Call the [ListImageBuildRiskItem](~~ListImageBuildRiskItem~~) operation to query this value.
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
   * The list of risk items.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailBuildRiskItem[];
  /**
   * @remarks
   * The list of risk levels.
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
   * The malicious sample ID.
   * > Call the [DescribeMatchedMaliciousNames](~~DescribeMatchedMaliciousNames~~) operation to query this value.
   * 
   * @example
   * 65201
   */
  id?: string;
  /**
   * @remarks
   * The malicious sample name.
   * > Call the [DescribeMatchedMaliciousNames](~~DescribeMatchedMaliciousNames~~) operation to query this value.
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
   * The malicious sample list.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailMaliciousFileItem[];
  /**
   * @remarks
   * The list of risk levels.
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
   * The sensitive file type ID.
   * > Call the [GetSensitiveDefineRuleConfig](~~GetSensitiveDefineRuleConfig~~) operation to query this value.
   * 
   * @example
   * key
   */
  id?: string;
  /**
   * @remarks
   * The sensitive file type name.
   * > Call the [GetSensitiveDefineRuleConfig](~~GetSensitiveDefineRuleConfig~~) operation to query this value.
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
   * The list of sensitive file check items.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailSensitiveFileItem[];
  /**
   * @remarks
   * The list of risk levels.
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
   * The vulnerability ID.
   * > Call the [DescribeVulListPage](https://help.aliyun.com/document_detail/471928.html) operation to query this value.
   * 
   * @example
   * CVE-2023-36034
   */
  id?: string;
  /**
   * @remarks
   * The vulnerability name.
   * > Call the [DescribeVulListPage](https://help.aliyun.com/document_detail/471928.html) operation to query this value.
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
   * The vulnerability type ID. Valid values:
   * - **cve**: system vulnerability
   * - **app**: application vulnerability.
   * 
   * @example
   * cve
   */
  id?: string;
  /**
   * @remarks
   * The vulnerability type name. Valid values:
   * - **system vulnerability**
   * - **application vulnerability**
   * 
   * @example
   * 系统漏洞
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
   * The vulnerability list.
   */
  item?: UpdateOpaStrategyNewRequestAlarmDetailVulItem[];
  /**
   * @remarks
   * The list of vulnerability types.
   */
  riskClass?: UpdateOpaStrategyNewRequestAlarmDetailVulRiskClass[];
  /**
   * @remarks
   * The list of risk levels.
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
   * The baseline risk information.
   */
  baseline?: UpdateOpaStrategyNewRequestAlarmDetailBaseline;
  /**
   * @remarks
   * The risky image build command information.
   */
  buildRisk?: UpdateOpaStrategyNewRequestAlarmDetailBuildRisk;
  /**
   * @remarks
   * The malicious sample information.
   */
  maliciousFile?: UpdateOpaStrategyNewRequestAlarmDetailMaliciousFile;
  /**
   * @remarks
   * The sensitive file information.
   */
  sensitiveFile?: UpdateOpaStrategyNewRequestAlarmDetailSensitiveFile;
  /**
   * @remarks
   * The vulnerability item information.
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
   * The policy instance ID in the cluster.
   * > Call the [GetOpaStrategyDetailNew](~~GetOpaStrategyDetailNew~~) operation to obtain this parameter.
   * 
   * @example
   * ack-1
   */
  ackPolicyInstanceId?: string;
  /**
   * @remarks
   * Specifies whether all namespaces are included. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  allNamespace?: number;
  /**
   * @remarks
   * The ID of the container cluster.
   * > Call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * cdcb56a931c**
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of namespaces.
   * 
   * >Notice: This parameter takes effect only when AllNamespace is set to 0..
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
   * The alert content details included in the policy.
   */
  alarmDetail?: UpdateOpaStrategyNewRequestAlarmDetail;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >Notice: This parameter is deprecated. Use the Scopes parameter to specify the scope of clusters to which the policy applies..
   * 
   * @example
   * c870ec78ecbcb41d2a35c679823ef****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * >Notice: This parameter is deprecated..
   * 
   * @example
   * docker-law
   */
  clusterName?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * 4566
   */
  description?: string;
  /**
   * @remarks
   * The list of image names included in the policy.
   */
  imageName?: string[];
  /**
   * @remarks
   * The list of image tags included in the policy.
   */
  label?: string[];
  /**
   * @remarks
   * Specifies whether the policy supports Internet malicious images. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  maliciousImage?: boolean;
  /**
   * @remarks
   * The action to take when the policy is hit. Valid values:
   * 
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
   * The scope of the policy.
   */
  scopes?: UpdateOpaStrategyNewRequestScopes[];
  /**
   * @remarks
   * The policy ID.
   * >Call the [ListOpaClusterStrategyNew](https://help.aliyun.com/document_detail/2623574.html) operation to obtain this parameter.
   * 
   * @example
   * 1003
   */
  strategyId?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test
   */
  strategyName?: string;
  /**
   * @remarks
   * The policy template ID.
   * >Call the [GetOpaStrategyTemplateSummary](https://help.aliyun.com/document_detail/2539952.html) operation to obtain this parameter.
   * 
   * @example
   * 109
   */
  strategyTemplateId?: number;
  /**
   * @remarks
   * Specifies whether the policy supports unscanned images. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
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

