// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChartNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create repositories in the namespace. Valid values:
   * 
   * \\-`  true `: automatically creates repositories in the namespace.
   * 
   * \\-`  false `: does not automatically create repositories in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `PUBLIC`: a public repository
   * *   `PRIVATE`: a private repository
   * 
   * @example
   * PUBLIC
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
   * The name of the namespace.
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

