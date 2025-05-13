// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The Java Virtual Machine (JVM) heap memory usage of the node.
   * 
   * @example
   * false
   */
  extended?: boolean;
  static names(): { [key: string]: string } {
    return {
      extended: 'extended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extended: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

