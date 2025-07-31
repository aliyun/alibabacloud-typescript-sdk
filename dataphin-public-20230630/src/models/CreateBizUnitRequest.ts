// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBizUnitRequestCreateCommandBizUnitAccountList extends $dara.Model {
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

export class CreateBizUnitRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizUnitAccountList?: CreateBizUnitRequestCreateCommandBizUnitAccountList[];
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
   * icon-environment
   */
  icon?: string;
  /**
   * @example
   * DEV_PROD
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitAccountList: 'BizUnitAccountList',
      description: 'Description',
      displayName: 'DisplayName',
      icon: 'Icon',
      mode: 'Mode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitAccountList: { 'type': 'array', 'itemType': CreateBizUnitRequestCreateCommandBizUnitAccountList },
      description: 'string',
      displayName: 'string',
      icon: 'string',
      mode: 'string',
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

export class CreateBizUnitRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateBizUnitRequestCreateCommand;
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
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBizUnitRequestCreateCommand,
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

