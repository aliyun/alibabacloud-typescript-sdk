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
   * The display name of the business object. The name can be up to 64 characters in length and can contain only Chinese characters, letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @remarks
   * The coded name of the business object. The name can be up to 64 characters in length and can contain only letters, digits, and underscores (_). If the ADB_PG engine is used, the coded name can be up to 40 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user who is the owner of the business object.
   * 
   * This parameter is required.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The ID of the parent entity inherited by the business object. Only common business objects can be configured to inherit entities, and they can only inherit online business objects.
   * 
   * @example
   * 116306
   */
  parentId?: number;
  /**
   * @remarks
   * The list of IDs of associated online business entities. If you do not specify this parameter, the original values are cleared.
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
   * The list of IDs of business event activities included in the business process activity. This parameter is valid only when the current activity is a business process activity.
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
   * The display name of the business activity. The name can be up to 64 characters in length and can contain only Chinese characters, letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * create_process_name
   */
  displayName?: string;
  /**
   * @remarks
   * The coded name of the business activity. The name can be up to 64 characters in length and can contain only letters, digits, and underscores (_). If the ADB_PG engine is used, the coded name can be up to 40 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user who is the owner of the business activity.
   * 
   * This parameter is required.
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
   * The list of IDs of associated online business entities. If you do not specify this parameter, the original values are cleared.
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
   * The business activity.
   */
  bizProcess?: UpdateBizEntityRequestUpdateCommandBizProcess;
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
   * The ID of the subject domain to which the business activity belongs.
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
   * The type of the business entity. For more information, see the Create a business entity operation.
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
   * The ID of the user who performs the operation.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
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
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

