// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterceptionTargetPageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
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
   * 45
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListInterceptionTargetPageResponseBodyRuleTargetList extends $dara.Model {
  /**
   * @remarks
   * The name of the application of the network object.
   * 
   * @example
   * frontend
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c3e2eae03eb064d2ebf940cd5e1b17****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the container cluster.
   * 
   * @example
   * sas-test-cnnf
   */
  clusterName?: string;
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
   * The type of the rule. Valid value:
   * 
   * *   customize: custom rule
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The tags specified for the network object.
   */
  tagList?: string[];
  /**
   * @remarks
   * The ID of the network object.
   * 
   * > You can call the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to query the IDs of network objects.
   * 
   * @example
   * 400914
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the network object.
   * 
   * @example
   * destination-test-obj-Na3cF
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the network object. Valid value:
   * 
   * *   IMAGE
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
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
      clusterId: 'string',
      clusterName: 'string',
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

export class ListInterceptionTargetPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListInterceptionTargetPageResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6B****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the network objects.
   */
  ruleTargetList?: ListInterceptionTargetPageResponseBodyRuleTargetList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      ruleTargetList: 'RuleTargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListInterceptionTargetPageResponseBodyPageInfo,
      requestId: 'string',
      ruleTargetList: { 'type': 'array', 'itemType': ListInterceptionTargetPageResponseBodyRuleTargetList },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.ruleTargetList)) {
      $dara.Model.validateArray(this.ruleTargetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

