// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RepoConfiguration } from "./RepoConfiguration";


export class UpdateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow automatic creation of a repository upon push.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default repository configuration.
   */
  defaultRepoConfiguration?: RepoConfiguration;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * - `PUBLIC`: public repository
   * 
   * - `PRIVATE`: private repository
   * 
   * @example
   * PRIVATE
   * 
   * @deprecated
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
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

