// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceUpDownStreamRequestInstanceId extends $dara.Model {
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_123456
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldInstanceIdList)) {
      $dara.Model.validateArray(this.fieldInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamRequest extends $dara.Model {
  /**
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
  instanceId?: GetInstanceUpDownStreamRequestInstanceId;
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
   * 1001121
   */
  projectId?: number;
  /**
   * @example
   * 1
   */
  upStreamDepth?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceId: 'InstanceId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceId: GetInstanceUpDownStreamRequestInstanceId,
      opTenantId: 'number',
      projectId: 'number',
      upStreamDepth: 'number',
    };
  }

  validate() {
    if(this.instanceId && typeof (this.instanceId as any).validate === 'function') {
      (this.instanceId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

