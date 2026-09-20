// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeChildrenRequest extends $dara.Model {
  /**
   * @remarks
   * The node ID. You can view the node ID in the Operation Center of the DataWorks console.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456878
   */
  nodeId?: number;
  /**
   * @remarks
   * The environment identifier of the Operation Center. PROD indicates the production environment. DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

