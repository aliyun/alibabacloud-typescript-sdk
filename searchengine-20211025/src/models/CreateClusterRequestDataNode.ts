// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestDataNode extends $dara.Model {
  /**
   * @remarks
   * The number of Searcher workers.
   * 
   * @example
   * 2
   */
  number?: number;
  /**
   * @remarks
   * The number of shards.
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

