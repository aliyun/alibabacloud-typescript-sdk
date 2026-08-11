// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestDataNode extends $dara.Model {
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * 2
   */
  number?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 2
   */
  partition?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      partition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestQueryNode extends $dara.Model {
  /**
   * @remarks
   * The number of query nodes.
   * 
   * @example
   * 2
   */
  number?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically mount the cluster.
   * 
   * @example
   * true
   */
  autoLoad?: boolean;
  /**
   * @remarks
   * The details of the data node.
   */
  dataNode?: CreateClusterRequestDataNode;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * Custom description
   */
  description?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  name?: string;
  /**
   * @remarks
   * The details of the query node.
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

