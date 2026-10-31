// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBizEntityRequestCreateCommandBizObject extends $dara.Model {
  /**
   * @remarks
   * The description of the business object. The description can be up to 128 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the business object. The name can be up to 64 characters in length and can contain only Chinese characters, letters, digits, underscores, and hyphens.
   * 
   * This parameter is required.
   * 
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @remarks
   * The code name of the business object. The name can be up to 64 characters in length and can contain only letters, digits, and underscores. For the ADB_PG engine, the code name can be up to 40 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the business object owner.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The ID of the parent entity to be inherited by the business object. Only normal business objects can be configured to inherit an entity, and they can only inherit online business objects.
   * 
   * @example
   * 116306
   */
  parentId?: number;
  /**
   * @remarks
   * The list of IDs of the associated online business entities.
   */
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * The object type of the business object. Valid values:
   * - NORMAL: Normal object.
   * - ENUM: Enumeration object.
   * - VIRTUAL: Virtual object.
   * - HIERARCHY: Hierarchy object.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
      refBizEntityIdList: 'RefBizEntityIdList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      ownerUserId: 'string',
      parentId: 'number',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refBizEntityIdList)) {
      $dara.Model.validateArray(this.refBizEntityIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityRequestCreateCommandBizProcess extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the business event activities included in the business process activity. This parameter is valid only when the current activity is a business process activity.
   */
  bizEventEntityIdList?: number[];
  /**
   * @remarks
   * The description of the business activity. The description can be up to 128 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the business activity. The name can be up to 64 characters in length and can contain only Chinese characters, letters, digits, underscores, and hyphens.
   * 
   * This parameter is required.
   * 
   * @example
   * create_process_name
   */
  displayName?: string;
  /**
   * @remarks
   * The code name of the business activity. The name can be up to 64 characters in length and can contain only letters, digits, and underscores. For the ADB_PG engine, the code name can be up to 40 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the business activity owner.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The preceding business process activities of the business process activity.
   */
  preBizProcessIdList?: number[];
  /**
   * @remarks
   * The list of IDs of the associated online business entities.
   */
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * The type of the business activity. Valid values:
   * - BIZ_EVENT: Business event.
   * - BIZ_SNAPSHOT: Business snapshot.
   * - BIZ_PROCESS: Business process.
   * 
   * This parameter is required.
   * 
   * @example
   * BIZ_EVENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizEventEntityIdList: 'BizEventEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      ownerUserId: 'OwnerUserId',
      preBizProcessIdList: 'PreBizProcessIdList',
      refBizEntityIdList: 'RefBizEntityIdList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEventEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      name: 'string',
      ownerUserId: 'string',
      preBizProcessIdList: { 'type': 'array', 'itemType': 'number' },
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizEventEntityIdList)) {
      $dara.Model.validateArray(this.bizEventEntityIdList);
    }
    if(Array.isArray(this.preBizProcessIdList)) {
      $dara.Model.validateArray(this.preBizProcessIdList);
    }
    if(Array.isArray(this.refBizEntityIdList)) {
      $dara.Model.validateArray(this.refBizEntityIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The business object.
   */
  bizObject?: CreateBizEntityRequestCreateCommandBizObject;
  /**
   * @remarks
   * The business activity.
   */
  bizProcess?: CreateBizEntityRequestCreateCommandBizProcess;
  /**
   * @remarks
   * The ID of the business unit to which the business activity belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the data domain to which the business activity belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @remarks
   * The business type. Valid values: 
   * - BIZ_OBJECT: Business object.
   * - BIZ_PROCESS: Business activity.
   * 
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizObject: 'BizObject',
      bizProcess: 'BizProcess',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObject: CreateBizEntityRequestCreateCommandBizObject,
      bizProcess: CreateBizEntityRequestCreateCommandBizProcess,
      bizUnitId: 'number',
      dataDomainId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.bizObject && typeof (this.bizObject as any).validate === 'function') {
      (this.bizObject as any).validate();
    }
    if(this.bizProcess && typeof (this.bizProcess as any).validate === 'function') {
      (this.bizProcess as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The creation request.
   * 
   * This parameter is required.
   */
  createCommand?: CreateBizEntityRequestCreateCommand;
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
   * The user ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBizEntityRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

