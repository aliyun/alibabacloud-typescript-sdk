// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cluster
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
   * *   qrs: Query Result Searcher (QRS) worker
   * *   search: Search worker
   * *   index: index
   * *   cluster: cluster
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

