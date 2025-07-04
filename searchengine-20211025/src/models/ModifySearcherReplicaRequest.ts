// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySearcherReplicaRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  partition?: number;
  /**
   * @example
   * 2
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      partition: 'partition',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partition: 'number',
      replica: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

