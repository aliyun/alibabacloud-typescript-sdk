// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RepoConfiguration } from "./RepoConfiguration";


export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create an image repository in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  defaultRepoConfiguration?: RepoConfiguration;
  /**
   * @remarks
   * The default type of the repositories that are automatically created in the namespace. Valid values:
   * 
   * *   `PUBLIC`: public repositories
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
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace. The name must be 2 to 120 characters in length, and can contain lowercase letters, digits, and the following delimiters: underscores (_), hyphens (-), and periods (.). The name cannot start or end with a delimiter.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace1
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoConfiguration: 'DefaultRepoConfiguration',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoConfiguration: RepoConfiguration,
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
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

