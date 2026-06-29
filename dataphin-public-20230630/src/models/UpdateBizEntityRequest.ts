// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizEntityRequestUpdateCommandBizObject extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The inherited entity of the business object. Only common business objects support inherited entity configuration, and only online business objects can be inherited.
   * 
   * @example
   * 116306
   */
  parentId?: number;
  /**
   * @remarks
   * The list of associated online business entity IDs. If this parameter is not specified, the existing values are cleared.
   */
  refBizEntityIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
      refBizEntityIdList: 'RefBizEntityIdList',
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

export class UpdateBizEntityRequestUpdateCommandBizProcess extends $dara.Model {
  /**
   * @remarks
   * The list of business event activity IDs contained in the business flow activity. This parameter is valid only when the current entity is a business flow activity.
   */
  bizEventEntityIdList?: number[];
  /**
   * @remarks
   * The description of the business process. The description can be up to 128 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the business process. The name can be up to 64 characters in length and can contain only Chinese characters, letters, digits, underscores, and hyphens.
   * 
   * This parameter is required.
   * 
   * @example
   * create_process_name
   */
  displayName?: string;
  /**
   * @remarks
   * The code name of the business process. The name can be up to 64 characters in length and can contain only letters, digits, and underscores. For the ADB_PG engine, the code name can be up to 40 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the business process owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The preceding business flow activities of the business flow activity.
   */
  preBizProcessIdList?: number[];
  /**
   * @remarks
   * The list of associated online business entity IDs. If this parameter is not specified, the existing values are cleared.
   */
  refBizEntityIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      bizEventEntityIdList: 'BizEventEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      ownerUserId: 'OwnerUserId',
      preBizProcessIdList: 'PreBizProcessIdList',
      refBizEntityIdList: 'RefBizEntityIdList',
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

export class UpdateBizEntityRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The business object.
   */
  bizObject?: UpdateBizEntityRequestUpdateCommandBizObject;
  /**
   * @remarks
   * The business process.
   */
  bizProcess?: UpdateBizEntityRequestUpdateCommandBizProcess;
  /**
   * @remarks
   * The ID of the business unit to which the business process belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the data domain to which the business process belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @remarks
   * The ID of the business entity.
   * 
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * The type of the business entity. For more information, refer to the create business entity operation.
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
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObject: UpdateBizEntityRequestUpdateCommandBizObject,
      bizProcess: UpdateBizEntityRequestUpdateCommandBizProcess,
      bizUnitId: 'number',
      dataDomainId: 'number',
      id: 'number',
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

export class UpdateBizEntityRequest extends $dara.Model {
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
   * The update request.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateBizEntityRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateBizEntityRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

