// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizEntityRequestUpdateCommandBizObject extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @example
   * 116306
   */
  parentId?: number;
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
  bizEventEntityIdList?: number[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_process_name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  preBizProcessIdList?: number[];
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
  bizObject?: UpdateBizEntityRequestUpdateCommandBizObject;
  bizProcess?: UpdateBizEntityRequestUpdateCommandBizProcess;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

