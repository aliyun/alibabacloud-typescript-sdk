// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalInstanceRequest extends $dara.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_23231
   */
  instanceId?: string;
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
   * 2323131
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      instanceId: 'InstanceId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      instanceId: 'string',
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

