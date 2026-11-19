// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of levels to expand the DAG downwards. Valid values: 1 to 6.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment. 
   * - PROD: production environment. This is the default value.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The get request.
   * 
   * This parameter is required.
   */
  instanceGetShrink?: string;
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
   * The run status of the instance. Valid values:
   * - INIT
   * - WATING
   * - RUNNING
   * - SUCCESS
   * - FAILED
   * 
   * @example
   * SUCCESS
   */
  runStatus?: string;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceGetShrink: 'InstanceGet',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceGetShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      runStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

