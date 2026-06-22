// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContainerDefenseRuleDetailResponseBodyDataScope extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all namespaces are included. Valid values:
   * 
   * - **0**: no.
   * - **1**: yes.
   * 
   * @example
   * 1
   */
  allNamespace?: number;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c9bea04*2b25**
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespaces?: string[];
  static names(): { [key: string]: string } {
    return {
      allNamespace: 'AllNamespace',
      clusterId: 'ClusterId',
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allNamespace: 'number',
      clusterId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerDefenseRuleDetailResponseBodyDataWhitelist extends $dara.Model {
  /**
   * @remarks
   * The list of file hashes.<notice>This parameter is not supported.</notice>.
   * 
   * @deprecated
   */
  hash?: string[];
  /**
   * @remarks
   * The list of images added to the whitelist.
   */
  image?: string[];
  /**
   * @remarks
   * The list of file paths added to the whitelist.
   */
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      image: 'Image',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: { 'type': 'array', 'itemType': 'string' },
      image: { 'type': 'array', 'itemType': 'string' },
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.hash)) {
      $dara.Model.validateArray(this.hash);
    }
    if(Array.isArray(this.image)) {
      $dara.Model.validateArray(this.image);
    }
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerDefenseRuleDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1766185894104***
   */
  aliUid?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 防御规则。
   */
  description?: string;
  /**
   * @remarks
   * The alert name. Valid values:
   * 
   * - **Non-image Process Startup**.
   * 
   * @example
   * EventName
   */
  eventName?: string;
  /**
   * @remarks
   * The alerting type. Valid values:
   * 
   * - **Container Active Defense**.
   * 
   * @example
   * EventType
   */
  eventType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1948
   */
  id?: number;
  /**
   * @remarks
   * The rule action. Valid values:
   * 
   * - **1**: alert.
   * 
   * - **2**: block.
   * 
   * @example
   * 1
   */
  ruleAction?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test-000
   */
  ruleName?: string;
  /**
   * @remarks
   * The switch status of the rule. Valid values:
   * 
   * - **1**: enabled.
   * - **0**: disabled.
   * 
   * @example
   * 0
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **1**: system rule.
   * 
   * - **2**: custom rule.
   * 
   * @example
   * 1
   */
  ruleType?: string;
  /**
   * @remarks
   * The scope in which the rule takes effect.
   */
  scope?: GetContainerDefenseRuleDetailResponseBodyDataScope[];
  /**
   * @remarks
   * The whitelist.
   */
  whitelist?: GetContainerDefenseRuleDetailResponseBodyDataWhitelist;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      description: 'Description',
      eventName: 'EventName',
      eventType: 'EventType',
      id: 'Id',
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleType: 'RuleType',
      scope: 'Scope',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      description: 'string',
      eventName: 'string',
      eventType: 'string',
      id: 'number',
      ruleAction: 'number',
      ruleName: 'string',
      ruleSwitch: 'number',
      ruleType: 'string',
      scope: { 'type': 'array', 'itemType': GetContainerDefenseRuleDetailResponseBodyDataScope },
      whitelist: GetContainerDefenseRuleDetailResponseBodyDataWhitelist,
    };
  }

  validate() {
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    if(this.whitelist && typeof (this.whitelist as any).validate === 'function') {
      (this.whitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerDefenseRuleDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The rule details.
   */
  data?: GetContainerDefenseRuleDetailResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request was successful.
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
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 77546BF4-CCE8-5F8D-B42B-5FD3306B43B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: successful.
   * - **false**: failed.
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
      data: GetContainerDefenseRuleDetailResponseBodyData,
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

