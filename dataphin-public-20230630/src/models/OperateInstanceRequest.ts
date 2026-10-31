// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateInstanceRequestOperateCommandInstanceIdList extends $dara.Model {
  /**
   * @remarks
   * The field instance IDs.
   */
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t_32111312
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

export class OperateInstanceRequestOperateCommand extends $dara.Model {
  /**
   * @remarks
   * The O&M instance list.
   * 
   * This parameter is required.
   */
  instanceIdList?: OperateInstanceRequestOperateCommandInstanceIdList[];
  /**
   * @remarks
   * The operation. Valid values:	
   * - RERUN: Rerun.
   * - PAUSE: Pause.
   * - RESUME: Resume.
   * - TERMINATE: Stop.
   * - SET_SUCCESS: Set to success.
   * 
   * This parameter is required.
   * 
   * @example
   * RERUN
   */
  operation?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 132311
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      operation: 'Operation',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': OperateInstanceRequestOperateCommandInstanceIdList },
      operation: 'string',
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: Development environment. 
   * - PROD: Production environment. This is the default value.
   * 
   * @example
   * PROD
   */
  env?: string;
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
   * The operator user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The operation request.
   * 
   * This parameter is required.
   */
  operateCommand?: OperateInstanceRequestOperateCommand;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      operateCommand: 'OperateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      operateCommand: OperateInstanceRequestOperateCommand,
    };
  }

  validate() {
    if(this.operateCommand && typeof (this.operateCommand as any).validate === 'function') {
      (this.operateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

