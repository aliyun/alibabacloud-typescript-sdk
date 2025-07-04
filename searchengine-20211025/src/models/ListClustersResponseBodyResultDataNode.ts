// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyResultDataNode extends $dara.Model {
  /**
   * @remarks
   * The name of the Searcher worker.
   * 
   * @example
   * ha-cn-8ed2k7brm05_qrs
   */
  name?: string;
  /**
   * @remarks
   * The number of Searcher workers.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The ID of the partition that is stored on the Searcher worker.
   * 
   * @example
   * dt=20220216
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

