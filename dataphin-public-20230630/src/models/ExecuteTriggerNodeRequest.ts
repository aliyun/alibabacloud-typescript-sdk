// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTriggerNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. The format is YYYY-MM-DD.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-01
   */
  bizDate?: string;
  /**
   * @remarks
   * The environment. Valid values: DEV for the development environment, and PROD for the production environment. Default value: PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The instance index. If the node is scheduled by hour or minute, multiple instances are generated per day. This parameter specifies the sequence number of the instance.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n_12345678
   */
  nodeId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The project ID.
   * 
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
      opUserId: 'OpUserId',
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
      opUserId: 'string',
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

