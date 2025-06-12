// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValuateTemplateRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * vpc-bp1q56trhtaq40vlq5oj
   */
  id?: string;
  /**
   * @remarks
   * The name of the application instance that is displayed on the diagram.
   * 
   * @example
   * ecs
   */
  nodeName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs
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

