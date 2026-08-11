// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * vpc_sh_domain_2
   */
  clusterName?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * ha-cn-30174dhoz53_qrs
   */
  name?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - qrs: query node
   * - search: data node
   * - index: index node
   * - cluster: cluster.
   * 
   * @example
   * index
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'clusterName',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

