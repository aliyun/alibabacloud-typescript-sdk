// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceResponseBodyNamespaces extends $dara.Model {
  /**
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @example
   * cri-94klsruryslx****
   */
  instanceId?: string;
  /**
   * @example
   * crn-tiw8t3f8i5lt****
   */
  namespaceId?: string;
  /**
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @example
   * rg-acfm4n5kzyf2fbi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

