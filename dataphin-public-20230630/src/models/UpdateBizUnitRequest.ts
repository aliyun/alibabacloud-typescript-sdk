// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizUnitRequestUpdateCommandBizUnitAccountList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20001201
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizUnitRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizUnitAccountList?: UpdateBizUnitRequestUpdateCommandBizUnitAccountList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 545844456
   */
  bizUnitId?: number;
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
   * 测试
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * icon-environment
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bz_code_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitAccountList: 'BizUnitAccountList',
      bizUnitId: 'BizUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitAccountList: { 'type': 'array', 'itemType': UpdateBizUnitRequestUpdateCommandBizUnitAccountList },
      bizUnitId: 'number',
      description: 'string',
      displayName: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizUnitAccountList)) {
      $dara.Model.validateArray(this.bizUnitAccountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizUnitRequest extends $dara.Model {
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
  updateCommand?: UpdateBizUnitRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateBizUnitRequestUpdateCommand,
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

