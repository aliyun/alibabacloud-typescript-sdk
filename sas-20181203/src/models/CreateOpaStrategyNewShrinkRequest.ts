// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpaStrategyNewShrinkRequestScopes extends $dara.Model {
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

export class CreateOpaStrategyNewShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The risks that you want to detect by using the rule.
   */
  alarmDetailShrink?: string;
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
  scopes?: CreateOpaStrategyNewShrinkRequestScopes[];
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
      alarmDetailShrink: 'AlarmDetail',
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
      alarmDetailShrink: 'string',
      clusterId: 'string',
      clusterName: 'string',
      description: 'string',
      imageName: { 'type': 'array', 'itemType': 'string' },
      label: { 'type': 'array', 'itemType': 'string' },
      maliciousImage: 'boolean',
      ruleAction: 'number',
      scopes: { 'type': 'array', 'itemType': CreateOpaStrategyNewShrinkRequestScopes },
      strategyId: 'number',
      strategyName: 'string',
      strategyTemplateId: 'number',
      unScanedImage: 'boolean',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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

