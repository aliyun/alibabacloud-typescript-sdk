// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountByRowPermissionIdRequestGetAccountByRowPermissionIdQuery extends $dara.Model {
  /**
   * @remarks
   * The row-level permission ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 300001234
   */
  rowPermissionId?: number;
  /**
   * @remarks
   * The row-level permission rule IDs.
   */
  ruleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      rowPermissionId: 'RowPermissionId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowPermissionId: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountByRowPermissionIdRequest extends $dara.Model {
  /**
   * @remarks
   * The request command.
   * 
   * This parameter is required.
   */
  getAccountByRowPermissionIdQuery?: GetAccountByRowPermissionIdRequestGetAccountByRowPermissionIdQuery;
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
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      getAccountByRowPermissionIdQuery: 'GetAccountByRowPermissionIdQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getAccountByRowPermissionIdQuery: GetAccountByRowPermissionIdRequestGetAccountByRowPermissionIdQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.getAccountByRowPermissionIdQuery && typeof (this.getAccountByRowPermissionIdQuery as any).validate === 'function') {
      (this.getAccountByRowPermissionIdQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

