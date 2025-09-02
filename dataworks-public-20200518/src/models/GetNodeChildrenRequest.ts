// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeChildrenRequest extends $dara.Model {
  /**
   * @remarks
   * The node ID. You can go to the Operation Center page in the DataWorks console to query the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456878
   */
  nodeId?: number;
  /**
   * @remarks
   * The environment type of Operation Center. Valid values: PROD and DEV. The value PROD indicates the production environment, and the value DEV indicates the development environment.
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

