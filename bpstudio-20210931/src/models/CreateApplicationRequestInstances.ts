// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateApplicationRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * vpc-bp1q56trhtaq40vlq5ojm
   */
  id?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * vpc
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * vpc
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      nodeName: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

