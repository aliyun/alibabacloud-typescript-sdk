// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGovernanceKubernetesClusterResponseBodyDataNamespaces extends $dara.Model {
  /**
   * @remarks
   * The name of the MSE namespace that you want to access.
   * 
   * @example
   * default
   */
  mseNamespace?: string;
  /**
   * @remarks
   * The name of the namespace in the ACK cluster.
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

