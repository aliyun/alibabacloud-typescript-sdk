// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterceptionRulePageResponseBodyInterceptionRuleListDstTarget extends $dara.Model {
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
   * An array that consists of the affected images.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * An array that consists of information about the ports used by the destination server.
   */
  ports?: string[];
  /**
   * @remarks
   * The type of the defense rule. Valid values:
   * 
   * *   **suggest**: intelligently recommended rule
   * *   **customize**: custom rule
   * *   **system**: system rule
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * An array that consists of tags added to the destination network object.
   */
  tagList?: string[];
  /**
   * @remarks
   * The ID of the network object.
   * 
   * @example
   * 302001
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the network object.
   * 
   * @example
   * demo4****
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

export class ListInterceptionRulePageResponseBodyInterceptionRuleListSrcTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * ack-jenkins-lawr****
   */
  appName?: string;
  /**
   * @remarks
   * An array that consists of the images of the network object.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * jenkins
   */
  namespace?: string;
  /**
   * @remarks
   * The type of the defense rule. Valid values:
   * 
   * *   **suggest**: intelligently recommended rule
   * *   **customize**: custom rule
   * *   **system**: system rule
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * An array that consists of tags added to the source network object.
   */
  tagList?: string[];
  /**
   * @remarks
   * The ID of the network object.
   * 
   * @example
   * 40****
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the network object.
   * 
   * @example
   * mhh-te****
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the affected assets.
   * 
   * @example
   * containerId
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

export class ListInterceptionRulePageResponseBodyInterceptionRuleList extends $dara.Model {
  /**
   * @remarks
   * The destination network object.
   */
  dstTarget?: ListInterceptionRulePageResponseBodyInterceptionRuleListDstTarget;
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
   * The order in which the entries are sorted.
   * 
   * @example
   * 1
   */
  orderIndex?: number;
  /**
   * @remarks
   * The ID of the defense rule.
   * 
   * @example
   * 30****
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the defense rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the defense rule. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The type of the defense rule.
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The source network object.
   */
  srcTarget?: ListInterceptionRulePageResponseBodyInterceptionRuleListSrcTarget;
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
      dstTarget: ListInterceptionRulePageResponseBodyInterceptionRuleListDstTarget,
      interceptType: 'number',
      orderIndex: 'number',
      ruleId: 'number',
      ruleName: 'string',
      ruleSwitch: 'number',
      ruleType: 'string',
      srcTarget: ListInterceptionRulePageResponseBodyInterceptionRuleListSrcTarget,
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

export class ListInterceptionRulePageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 19
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterceptionRulePageResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of information about the defense rules.
   */
  interceptionRuleList?: ListInterceptionRulePageResponseBodyInterceptionRuleList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListInterceptionRulePageResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12BR****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      interceptionRuleList: 'InterceptionRuleList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interceptionRuleList: { 'type': 'array', 'itemType': ListInterceptionRulePageResponseBodyInterceptionRuleList },
      pageInfo: ListInterceptionRulePageResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.interceptionRuleList)) {
      $dara.Model.validateArray(this.interceptionRuleList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

