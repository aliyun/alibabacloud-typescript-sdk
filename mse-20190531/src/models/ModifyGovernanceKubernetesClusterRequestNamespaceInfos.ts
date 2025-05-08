// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGovernanceKubernetesClusterRequestNamespaceInfos extends $dara.Model {
  /**
   * @remarks
   * The microservice namespace. If you do not specify this parameter, Microservice Governance is not enabled for the namespace.
   * 
   * @example
   * default
   */
  mseNamespace?: string;
  /**
   * @remarks
   * The name of the Kubernetes namespace.
   * 
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mseNamespace: 'MseNamespace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mseNamespace: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

