// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistryNamespaceResponseBodyNamespace extends $dara.Model {
  /**
   * @example
   * private
   */
  acl?: string;
  /**
   * @example
   * 2025-03-20T02:18:29Z
   */
  createTime?: string;
  /**
   * @example
   * demo
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
   * share
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

export class GetRegistryNamespaceResponseBody extends $dara.Model {
  namespace?: GetRegistryNamespaceResponseBodyNamespace;
  /**
   * @example
   * 26684763-5BAB-58C8-BA4F-9D622AB7AD14
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: GetRegistryNamespaceResponseBodyNamespace,
      requestId: 'string',
    };
  }

  validate() {
    if(this.namespace && typeof (this.namespace as any).validate === 'function') {
      (this.namespace as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

