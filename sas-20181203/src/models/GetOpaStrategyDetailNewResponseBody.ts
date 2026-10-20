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
   * The baseline item information.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBaselineItem[];
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
   * The ID of the risky image build command type.
   * > You can call the [ListImageBuildRiskItem](~~ListImageBuildRiskItem~~) operation to query this value.
   * 
   * @example
   * key
   */
  id?: string;
  /**
   * @remarks
   * The name of the risky image build command type.
   * > You can call the [ListImageBuildRiskItem](~~ListImageBuildRiskItem~~) operation to query this value.
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
   * The list of risk items.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBuildRiskItem[];
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
   * The malicious sample item information.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailMaliciousFileItem[];
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
   * The ID of the sensitive file type.
   * > You can call the [GetSensitiveDefineRuleConfig](~~GetSensitiveDefineRuleConfig~~) operation to query this value.
   * 
   * @example
   * key
   */
  id?: string;
  /**
   * @remarks
   * The name of the sensitive file type.
   * > You can call the [GetSensitiveDefineRuleConfig](~~GetSensitiveDefineRuleConfig~~) operation to query this value.
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
   * The list of sensitive file check items.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailSensitiveFileItem[];
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

export class GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulRiskClass extends $dara.Model {
  /**
   * @remarks
   * The ID of the vulnerability type. Valid values:
   * - **cve**: system vulnerability
   * - **app**: application vulnerability
   * 
   * @example
   * cve
   */
  id?: string;
  /**
   * @remarks
   * The name of the vulnerability type. Valid values:
   * - **System vulnerability**
   * - **Application vulnerability**
   * 
   * @example
   * System vulnerability
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
   * The vulnerability item information.
   */
  item?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulItem[];
  /**
   * @remarks
   * The list of vulnerability types.
   */
  riskClass?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailVulRiskClass[];
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
   * The baseline configuration information.
   */
  baseline?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBaseline;
  /**
   * @remarks
   * The risky image build command information.
   */
  buildRisk?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailBuildRisk;
  /**
   * @remarks
   * The malicious sample configuration information.
   */
  maliciousFile?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailMaliciousFile;
  /**
   * @remarks
   * The sensitive file information.
   */
  sensitiveFile?: GetOpaStrategyDetailNewResponseBodyDataAlarmDetailSensitiveFile;
  /**
   * @remarks
   * The vulnerability configuration information.
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
   * The instance ID of the policy in the cluster.
   * 
   * @example
   * ack-0
   */
  ackPolicyInstanceId?: string;
  /**
   * @remarks
   * Specifies whether all namespaces are included. Valid values:
   * 
   * - **1**: yes
   * - **0**: no
   * 
   * @example
   * 1
   */
  allNamespace?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c1fdb5fd8d**7163
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of namespaces.
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
   * The policy configuration information.
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
   * The page number from which to display the query results. Default value: **1**.
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
   * The image name.
   */
  imageName?: string[];
  /**
   * @remarks
   * The image tag.
   */
  label?: string[];
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether the policy supports malicious images from the Internet. Valid values:
   * 
   * - **true**: supported
   * - **false**: not supported
   * 
   * @example
   * true
   */
  maliciousImage?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return per page during paging in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The action to perform when the policy is matched. Valid values:
   * - **1**: alert
   * - **2**: block
   * - **3**: allow
   * 
   * @example
   * 1
   */
  ruleAction?: number;
  /**
   * @remarks
   * The scope.
   */
  scopes?: GetOpaStrategyDetailNewResponseBodyDataScopes[];
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1005
   */
  strategyId?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test001
   */
  strategyName?: string;
  /**
   * @remarks
   * The ID of the policy template.
   * 
   * @example
   * 1204
   */
  strategyTemplateId?: number;
  /**
   * @remarks
   * Specifies whether the policy supports unscanned images. Valid values:
   * 
   * - **true**: supported
   * - **false**: not supported
   * 
   * @example
   * true
   */
  unScanedImage?: boolean;
  /**
   * @remarks
   * The whitelist of image tags.
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
   * The result code. A value of **200** indicates success, whereas any other value indicates failure. You can use this field to identify the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetOpaStrategyDetailNewResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * E819FD71-D240-5E54-AA7F-20FED2ECBEB6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
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

