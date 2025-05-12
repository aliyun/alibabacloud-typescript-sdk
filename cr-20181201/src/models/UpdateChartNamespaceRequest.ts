// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChartNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create repositories in the namespace. Valid values:
   * 
   * *   `true`: automatically creates repositories in the namespace.
   * *   `false`: does not automatically create repositories in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default type of the repository. Valid values:
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
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
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

