// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKubernetesSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster.
   * 
   * @example
   * cbc1efca895a64af097ff00b26f3f****
   */
  cluster?: string;
  /**
   * @remarks
   * The name of the ACK cluster.
   * 
   * @example
   * k8s-demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
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

