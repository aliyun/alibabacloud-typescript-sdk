// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RepoConfiguration } from "./RepoConfiguration";


export class ListNamespaceResponseBodyNamespaces extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatically creating repositories feature is enabled for the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  defaultRepoConfiguration?: RepoConfiguration;
  /**
   * @remarks
   * The default type of repositories in the namespace. Valid values:
   * 
   * *   `PUBLIC`: public repositories.
   * *   `PRIVATE`: private repositories.
   * 
   * @example
   * PUBLIC
   * 
   * @deprecated
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-94klsruryslx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * crn-tiw8t3f8i5lt****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status of the namespace. Valid values:
   * 
   * *   `NORMAL`: The namespace is normal.
   * *   `DELETING`: The namespace is being deleted.
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm4n5kzyf2fbi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoConfiguration: 'DefaultRepoConfiguration',
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
      defaultRepoConfiguration: RepoConfiguration,
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(this.defaultRepoConfiguration && typeof (this.defaultRepoConfiguration as any).validate === 'function') {
      (this.defaultRepoConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

