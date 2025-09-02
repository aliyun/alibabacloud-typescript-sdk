// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDagTestRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-05-26 00:00:00
   */
  bizdate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @example
   * bizdate=$bizdate tbods=$tbods
   */
  nodeParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      name: 'Name',
      nodeId: 'NodeId',
      nodeParams: 'NodeParams',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'string',
      name: 'string',
      nodeId: 'number',
      nodeParams: 'string',
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

