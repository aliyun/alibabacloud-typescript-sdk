// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOpaStrategyNewShrinkRequestScopes extends $dara.Model {
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

export class UpdateOpaStrategyNewShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The risks that you want to detect by using the rule.
   */
  alarmDetailShrink?: string;
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
  scopes?: UpdateOpaStrategyNewShrinkRequestScopes[];
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
      scopes: { 'type': 'array', 'itemType': UpdateOpaStrategyNewShrinkRequestScopes },
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

