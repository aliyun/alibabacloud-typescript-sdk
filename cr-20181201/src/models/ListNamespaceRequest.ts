// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-94klsruryslx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status of the namespace. Valid values:
   * 
   * *   `NORMAL`
   * *   `DELETING`
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
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

