// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestQueryNode extends $dara.Model {
  /**
   * @remarks
   * The number of QRS workers.
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

