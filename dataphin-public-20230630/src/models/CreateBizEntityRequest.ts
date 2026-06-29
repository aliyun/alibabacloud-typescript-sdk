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
   * The code name of the business object. The name can be up to 64 characters in length and can contain only letters, digits, and underscores. For ADB_PG engines, the code name can be up to 40 characters in length.
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
   * The parent entity from which the business object inherits. Only common business objects support inheritance, and the parent entity must be an online business object.
   * 
   * @example
   * 116306
   */
  parentId?: number;
  /**
   * @remarks
   * The list of associated online business entity IDs.
   */
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * The object type of the business object. Valid values:
   * - NORMAL: common object.
   * - ENUM: enumeration object.
   * - VIRTUAL: virtual object.
   * - HIERARCHY: hierarchy object.
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
   * The list of business event activity IDs included in the business process activity. This parameter takes effect only when the current activity is a business process activity.
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
   * The code name of the business activity. The name can be up to 64 characters in length and can contain only letters, digits, and underscores. For ADB_PG engines, the code name can be up to 40 characters in length.
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
   * The list of preceding business process activity IDs for the business process activity.
   */
  preBizProcessIdList?: number[];
  /**
   * @remarks
   * The list of associated online business entity IDs.
   */
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * The type of the business activity. Valid values:
   * - BIZ_EVENT: business event.
   * - BIZ_SNAPSHOT: business snapshot.
   * - BIZ_PROCESS: business process.
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
   * - BIZ_OBJECT: business object.
   * - BIZ_PROCESS: business activity.
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
   * The create request.
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
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBizEntityRequestCreateCommand,
      opTenantId: 'number',
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

