// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixDataRequestFixDataCommandDownStreamInstanceIdList extends $dara.Model {
  fieldInstanceIdList?: string[];
  /**
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
  fieldInstanceIdList?: string[];
  /**
   * @remarks
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
   * @example
   * false
   */
  containRootInstance?: boolean;
  downStreamInstanceIdList?: FixDataRequestFixDataCommandDownStreamInstanceIdList[];
  /**
   * @example
   * ALL_INSTANCE
   */
  downstreamRange?: string;
  /**
   * @example
   * false
   */
  forceRerun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 132344
   */
  projectId?: number;
  /**
   * @remarks
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
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fixDataCommand?: FixDataRequestFixDataCommand;
  /**
   * @remarks
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

