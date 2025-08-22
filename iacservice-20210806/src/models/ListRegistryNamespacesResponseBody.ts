// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryNamespacesResponseBodyNamespaces extends $dara.Model {
  /**
   * @example
   * private
   */
  acl?: string;
  /**
   * @example
   * 2025-01-15T02:16:58Z
   */
  createTime?: string;
  /**
   * @example
   * dd
   */
  description?: string;
  /**
   * @example
   * admin
   */
  maintainer?: string;
  /**
   * @example
   * 21
   */
  modules?: number;
  /**
   * @example
   * test_namespace
   */
  namespaceName?: string;
  sharedAccounts?: number[];
  /**
   * @example
   * shared
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      createTime: 'createTime',
      description: 'description',
      maintainer: 'maintainer',
      modules: 'modules',
      namespaceName: 'namespaceName',
      sharedAccounts: 'sharedAccounts',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      createTime: 'string',
      description: 'string',
      maintainer: 'string',
      modules: 'number',
      namespaceName: 'string',
      sharedAccounts: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sharedAccounts)) {
      $dara.Model.validateArray(this.sharedAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistryNamespacesResponseBody extends $dara.Model {
  /**
   * @example
   * 53
   */
  count?: number;
  /**
   * @example
   * 24
   */
  maxResults?: number;
  namespaces?: ListRegistryNamespacesResponseBodyNamespaces[];
  /**
   * @example
   * IPTL1Zpr1andEF4lQ3XAYFTgtpI04QQpc5dyKpESXBc=
   */
  nextToken?: string;
  /**
   * @example
   * 5FFB0033-A016-5A9D-9283-C123AAA7F71D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      maxResults: 'maxResults',
      namespaces: 'namespaces',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      namespaces: { 'type': 'array', 'itemType': ListRegistryNamespacesResponseBodyNamespaces },
      nextToken: 'string',
      requestId: 'string',
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

