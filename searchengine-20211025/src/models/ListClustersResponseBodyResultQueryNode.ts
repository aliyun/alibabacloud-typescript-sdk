// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyResultQueryNode extends $dara.Model {
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * test_0704
   */
  name?: string;
  /**
   * @remarks
   * The number of QRS workers.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The ID of the partition that is stored on the QRS worker.
   * 
   * @example
   * dt=20211216
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

