// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTriggerNodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-01
   */
  bizDate?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n_12345678
   */
  nodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10110201
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      env: 'Env',
      index: 'Index',
      nodeId: 'NodeId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      env: 'string',
      index: 'number',
      nodeId: 'string',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

