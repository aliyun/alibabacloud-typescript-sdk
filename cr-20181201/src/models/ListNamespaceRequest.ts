// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-94klsruryslx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The list of namespaces.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

