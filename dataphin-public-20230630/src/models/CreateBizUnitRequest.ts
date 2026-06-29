// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBizUnitRequestCreateCommandBizUnitAccountList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
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
   * The list of data domain architects.
   * 
   * This parameter is required.
   */
  bizUnitAccountList?: CreateBizUnitRequestCreateCommandBizUnitAccountList[];
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
   * The preset icon. Valid values:
   * - icon-e-commerce: E-commerce.
   * - icon-finance: Finance.
   * - con-cloud-computing: Cloud computing.
   * - icon-advertisement: Advertising and marketing.
   * - icon-logistics: Logistics.
   * - icon-entertainment: Entertainment.
   * - icon-traffic: Travel.
   * - icon-health: Health.
   * - icon-social-contact: Social and communication.
   * - con-dining: Dining.
   * - icon-education: Education.
   * - icon-environment: Environment.
   * 
   * This parameter is required.
   * 
   * @example
   * icon-environment
   */
  icon?: string;
  /**
   * @remarks
   * The production mode. Valid values:
   * - BASIC: single-environment mode.
   * - DEV_PROD: development/production dual-environment mode.
   * 
   * @example
   * DEV_PROD
   */
  mode?: string;
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
   * The create request.
   * 
   * This parameter is required.
   */
  createCommand?: CreateBizUnitRequestCreateCommand;
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

