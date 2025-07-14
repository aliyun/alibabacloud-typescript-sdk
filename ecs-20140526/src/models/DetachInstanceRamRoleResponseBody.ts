// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance RAM role.
   * 
   * @example
   * RamRoleTest
   */
  ramRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramRoleName: 'RamRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramRoleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets extends $dara.Model {
  instanceRamRoleSet?: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet[];
  static names(): { [key: string]: string } {
    return {
      instanceRamRoleSet: 'InstanceRamRoleSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRamRoleSet: { 'type': 'array', 'itemType': DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet },
    };
  }

  validate() {
    if(Array.isArray(this.instanceRamRoleSet)) {
      $dara.Model.validateArray(this.instanceRamRoleSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance RAM role was detached. If 200 is returned, the instance RAM role was detached. If any other value is returned, the instance RAM role failed to be detached. For more information, see the "Error codes" section.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the ECS instance from which you attempted to detach the instance RAM role.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance RAM role and the ID of the ECS instance.
   */
  instanceRamRoleSets?: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets;
  /**
   * @remarks
   * Indicates whether the instance RAM role was detached. If success is returned, the instance RAM role was detached. If any other value is returned, the instance RAM role failed to be detached. For more information, see the "Error codes" section.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the instance RAM role was detached.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      instanceRamRoleSets: 'InstanceRamRoleSets',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      instanceRamRoleSets: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceRamRoleSets && typeof (this.instanceRamRoleSets as any).validate === 'function') {
      (this.instanceRamRoleSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResults extends $dara.Model {
  detachInstanceRamRoleResult?: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResult[];
  static names(): { [key: string]: string } {
    return {
      detachInstanceRamRoleResult: 'DetachInstanceRamRoleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachInstanceRamRoleResult: { 'type': 'array', 'itemType': DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResult },
    };
  }

  validate() {
    if(Array.isArray(this.detachInstanceRamRoleResult)) {
      $dara.Model.validateArray(this.detachInstanceRamRoleResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the instance RAM role detachment, which include the names of the instance RAM roles and the IDs of the ECS instances from which you attempted to detach the instance RAM roles.
   */
  detachInstanceRamRoleResults?: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResults;
  /**
   * @remarks
   * The number of ECS instances from which instance RAM roles failed to be detached.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The name of the instance RAM role.
   * 
   * @example
   * RamRoleTest
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of ECS instances from which you attempted to detach instance RAM roles.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detachInstanceRamRoleResults: 'DetachInstanceRamRoleResults',
      failCount: 'FailCount',
      ramRoleName: 'RamRoleName',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachInstanceRamRoleResults: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResults,
      failCount: 'number',
      ramRoleName: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.detachInstanceRamRoleResults && typeof (this.detachInstanceRamRoleResults as any).validate === 'function') {
      (this.detachInstanceRamRoleResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

