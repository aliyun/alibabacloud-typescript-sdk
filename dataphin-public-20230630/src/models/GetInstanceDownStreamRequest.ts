// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamRequestInstanceGet extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_5929472_20210411_9577721
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class GetInstanceDownStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceGet?: GetInstanceDownStreamRequestInstanceGet;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * SUCCESS
   */
  runStatus?: string;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceGet: 'InstanceGet',
      opTenantId: 'OpTenantId',
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceGet: GetInstanceDownStreamRequestInstanceGet,
      opTenantId: 'number',
      runStatus: 'string',
    };
  }

  validate() {
    if(this.instanceGet && typeof (this.instanceGet as any).validate === 'function') {
      (this.instanceGet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

