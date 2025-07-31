// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountByRowPermissionIdRequestGetAccountByRowPermissionIdQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300001234
   */
  rowPermissionId?: number;
  /**
   * @remarks
   * This parameter is required.
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
   * This parameter is required.
   */
  getAccountByRowPermissionIdQuery?: GetAccountByRowPermissionIdRequestGetAccountByRowPermissionIdQuery;
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
      getAccountByRowPermissionIdQuery: 'GetAccountByRowPermissionIdQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getAccountByRowPermissionIdQuery: GetAccountByRowPermissionIdRequestGetAccountByRowPermissionIdQuery,
      opTenantId: 'number',
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

