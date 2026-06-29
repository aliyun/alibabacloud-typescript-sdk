// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTriggerNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The business date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-01
   */
  bizDate?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * Default value: PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * If the node is an hourly or minutely node, multiple instances are generated per day. This parameter specifies the ordinal number of the instance.
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

