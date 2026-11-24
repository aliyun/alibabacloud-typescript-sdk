// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChartNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic creation of a repository is enabled. Valid values:
   * 
   * - `true`: Automatic creation of a repository is enabled.
   * 
   * - `false`: Automatic creation of a repository is disabled.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * - `PUBLIC`: Public repository.
   * 
   * - `PRIVATE`: Private repository.
   * 
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace01
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

