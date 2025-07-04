// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyResultQueryNode extends $dara.Model {
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 2
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'number',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

