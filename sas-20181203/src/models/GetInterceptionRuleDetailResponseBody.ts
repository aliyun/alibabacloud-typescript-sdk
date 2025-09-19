// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterceptionRuleDetailResponseBodyInterceptionRuleDetailDstTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * console
   */
  appName?: string;
  /**
   * @remarks
   * An array that consists of the name of the image specified for the network object.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace to which the network object belongs.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * An array that consists of the port range of the destination network object.
   */
  ports?: string[];
  /**
   * @remarks
   * The type of the rule.
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * An array that consists of the labels specified for the network object.
   */
  tagList?: string[];
  /**
   * @remarks
   * The ID of the network object.
   * 
   * @example
   * 200014
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * demo4-be1
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the network object.
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      imageList: 'ImageList',
      namespace: 'Namespace',
      ports: 'Ports',
      ruleType: 'RuleType',
      tagList: 'TagList',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      imageList: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      ports: { 'type': 'array', 'itemType': 'string' },
      ruleType: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      targetId: 'number',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterceptionRuleDetailResponseBodyInterceptionRuleDetailSrcTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * console
   */
  appName?: string;
  /**
   * @remarks
   * The images of the network object.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace to which the network object belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The type of the rule.
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The labels specified for the network object.
   */
  tagList?: string[];
  /**
   * @remarks
   * The ID of the network object.
   * 
   * @example
   * 300635
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * dmz
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the network object.
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      imageList: 'ImageList',
      namespace: 'Namespace',
      ruleType: 'RuleType',
      tagList: 'TagList',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      imageList: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      ruleType: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      targetId: 'number',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterceptionRuleDetailResponseBodyInterceptionRuleDetail extends $dara.Model {
  /**
   * @remarks
   * The destination network object.
   */
  dstTarget?: GetInterceptionRuleDetailResponseBodyInterceptionRuleDetailDstTarget;
  /**
   * @remarks
   * The interception mode. Valid values:
   * 
   * *   **0**: monitor
   * *   **1**: block
   * *   **2**: alert
   * *   **3**: allow
   * 
   * @example
   * 1
   */
  interceptType?: number;
  /**
   * @remarks
   * The priority of the rule. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  orderIndex?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 467
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * dmz-frontend-accept
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the defense rule. Valid values:
   * 
   * *   **1**: The rule is enabled.
   * *   **0**: The rule is disabled.
   * 
   * @example
   * 1
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **suggest**: a suggestion rule
   * *   **customize**: a custom rule
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The source network object.
   */
  srcTarget?: GetInterceptionRuleDetailResponseBodyInterceptionRuleDetailSrcTarget;
  static names(): { [key: string]: string } {
    return {
      dstTarget: 'DstTarget',
      interceptType: 'InterceptType',
      orderIndex: 'OrderIndex',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleType: 'RuleType',
      srcTarget: 'SrcTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstTarget: GetInterceptionRuleDetailResponseBodyInterceptionRuleDetailDstTarget,
      interceptType: 'number',
      orderIndex: 'number',
      ruleId: 'number',
      ruleName: 'string',
      ruleSwitch: 'number',
      ruleType: 'string',
      srcTarget: GetInterceptionRuleDetailResponseBodyInterceptionRuleDetailSrcTarget,
    };
  }

  validate() {
    if(this.dstTarget && typeof (this.dstTarget as any).validate === 'function') {
      (this.dstTarget as any).validate();
    }
    if(this.srcTarget && typeof (this.srcTarget as any).validate === 'function') {
      (this.srcTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterceptionRuleDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the rule.
   */
  interceptionRuleDetail?: GetInterceptionRuleDetailResponseBodyInterceptionRuleDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9FBC6E47-7508-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      interceptionRuleDetail: 'InterceptionRuleDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interceptionRuleDetail: GetInterceptionRuleDetailResponseBodyInterceptionRuleDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.interceptionRuleDetail && typeof (this.interceptionRuleDetail as any).validate === 'function') {
      (this.interceptionRuleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

