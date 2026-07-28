// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistryNamespaceResponseBodyNamespace extends $dara.Model {
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
   * 2025-03-20T02:18:29Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The name of the administrator.
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
   * The name of the workspace.
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
   * The type of the workspace.
   * 
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
  /**
   * @remarks
   * The workspace information.
   */
  namespace?: GetRegistryNamespaceResponseBodyNamespace;
  /**
   * @remarks
   * The request ID.
   * 
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

