// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixDataRequestFixDataCommandDownStreamInstanceIdList extends $dara.Model {
  /**
   * @remarks
   * The field instance ID.
   */
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * t_2323421
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

export class FixDataRequestFixDataCommandRootInstanceId extends $dara.Model {
  /**
   * @remarks
   * The field IDs. This parameter is available when the node is a logical table instance ID. If you do not specify this parameter, the full table is used by default.
   */
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t_2323111
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

export class FixDataRequestFixDataCommand extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to rerun the root instance. If you do not specify this parameter, the default value is true.
   * 
   * @example
   * false
   */
  containRootInstance?: boolean;
  /**
   * @remarks
   * The downstream instances. If you have specified a downstream range, you do not need to specify this parameter. Otherwise, you must specify the list of downstream instances.
   */
  downStreamInstanceIdList?: FixDataRequestFixDataCommandDownStreamInstanceIdList[];
  /**
   * @remarks
   * The downstream range. Valid values:
   * - ALL_FAILED_INSTANCE: all failed instances.
   * - ALL_INSTANCE: all instances.
   * - ALL_FINAL_INSTANCE: all desired state instances.
   * - If you do not specify this parameter, the rerun is performed based on the specified downstream instances.
   * 
   * @example
   * ALL_INSTANCE
   */
  downstreamRange?: string;
  /**
   * @remarks
   * Specifies whether to force a rerun.
   * 
   * @example
   * false
   */
  forceRerun?: boolean;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 132344
   */
  projectId?: number;
  /**
   * @remarks
   * The root instance.
   * 
   * This parameter is required.
   */
  rootInstanceId?: FixDataRequestFixDataCommandRootInstanceId;
  static names(): { [key: string]: string } {
    return {
      containRootInstance: 'ContainRootInstance',
      downStreamInstanceIdList: 'DownStreamInstanceIdList',
      downstreamRange: 'DownstreamRange',
      forceRerun: 'ForceRerun',
      projectId: 'ProjectId',
      rootInstanceId: 'RootInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containRootInstance: 'boolean',
      downStreamInstanceIdList: { 'type': 'array', 'itemType': FixDataRequestFixDataCommandDownStreamInstanceIdList },
      downstreamRange: 'string',
      forceRerun: 'boolean',
      projectId: 'number',
      rootInstanceId: FixDataRequestFixDataCommandRootInstanceId,
    };
  }

  validate() {
    if(Array.isArray(this.downStreamInstanceIdList)) {
      $dara.Model.validateArray(this.downStreamInstanceIdList);
    }
    if(this.rootInstanceId && typeof (this.rootInstanceId as any).validate === 'function') {
      (this.rootInstanceId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixDataRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment. 
   * - PROD (default): production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The command to rerun downstream nodes to fix data link issues. You can choose to force a rerun.
   * 
   * This parameter is required.
   */
  fixDataCommand?: FixDataRequestFixDataCommand;
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
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      fixDataCommand: 'FixDataCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      fixDataCommand: FixDataRequestFixDataCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.fixDataCommand && typeof (this.fixDataCommand as any).validate === 'function') {
      (this.fixDataCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

