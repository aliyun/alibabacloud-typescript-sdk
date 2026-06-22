// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOpaStrategyNewShrinkRequestScopes extends $dara.Model {
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

export class UpdateOpaStrategyNewShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alert content details included in the policy.
   */
  alarmDetailShrink?: string;
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
  scopes?: UpdateOpaStrategyNewShrinkRequestScopes[];
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

