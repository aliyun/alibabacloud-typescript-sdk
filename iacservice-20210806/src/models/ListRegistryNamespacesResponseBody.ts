// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryNamespacesResponseBodyNamespaces extends $dara.Model {
  /**
   * @remarks
   * The permissions.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-01-15T02:16:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The administrator name.
   * 
   * @example
   * admin
   */
  maintainer?: string;
  /**
   * @remarks
   * The number of Registry templates in the workspace.
   * 
   * @example
   * 21
   */
  modules?: number;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * NamespaceName
   */
  namespaceName?: string;
  /**
   * @remarks
   * The list of shared accounts.
   */
  sharedAccounts?: number[];
  /**
   * @remarks
   * The workspace type.
   * 
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
   * @remarks
   * The total number of records.
   * 
   * @example
   * 53
   */
  count?: number;
  /**
   * @remarks
   * The maximum number of records returned at a time.
   * 
   * @example
   * 24
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of workspaces.
   */
  namespaces?: ListRegistryNamespacesResponseBodyNamespaces[];
  /**
   * @remarks
   * The token for the next page. A value of null indicates that no more pages are available.
   * 
   * @example
   * IPTL1XAYFTgtpI04QQpc5dyKpESXBc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

