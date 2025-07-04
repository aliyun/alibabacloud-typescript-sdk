// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestDataNode } from "./CreateClusterRequestDataNode";
import { CreateClusterRequestQueryNode } from "./CreateClusterRequestQueryNode";


export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic connection.
   * 
   * @example
   * true
   */
  autoLoad?: boolean;
  /**
   * @remarks
   * The details of the Searcher workers.
   */
  dataNode?: CreateClusterRequestDataNode;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * "ha-tets"
   */
  description?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The details of the Query Result Searcher (QRS) workers.
   */
  queryNode?: CreateClusterRequestQueryNode;
  static names(): { [key: string]: string } {
    return {
      autoLoad: 'autoLoad',
      dataNode: 'dataNode',
      description: 'description',
      name: 'name',
      queryNode: 'queryNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLoad: 'boolean',
      dataNode: CreateClusterRequestDataNode,
      description: 'string',
      name: 'string',
      queryNode: CreateClusterRequestQueryNode,
    };
  }

  validate() {
    if(this.dataNode && typeof (this.dataNode as any).validate === 'function') {
      (this.dataNode as any).validate();
    }
    if(this.queryNode && typeof (this.queryNode as any).validate === 'function') {
      (this.queryNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

