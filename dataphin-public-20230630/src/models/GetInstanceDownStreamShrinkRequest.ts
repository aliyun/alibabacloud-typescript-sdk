// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Number of levels to expand downstream in the DAG query. Valid values: 1 to 6.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * Environment identifier.
   * - DEV: Development environment.
   * - PROD (default): Production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The request body.
   * 
   * This parameter is required.
   */
  instanceGetShrink?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Run status of the instance.
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
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceGetShrink: 'string',
      opTenantId: 'number',
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

