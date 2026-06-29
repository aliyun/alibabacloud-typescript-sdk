// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyDataServiceApiRequestApplyCommandDevFieldList extends $dara.Model {
  /**
   * @remarks
   * The API permission field ID.
   * 
   * @example
   * 22
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataServiceApiRequestApplyCommandProdFieldList extends $dara.Model {
  /**
   * @remarks
   * The API permission field ID.
   * 
   * @example
   * 22
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataServiceApiRequestApplyCommand extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  apiId?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1203
   */
  appId?: number;
  /**
   * @remarks
   * Specifies whether to apply for permissions on operation-type APIs in the development environment.
   * 
   * @example
   * true
   */
  applyDev?: boolean;
  /**
   * @remarks
   * Specifies whether to apply for permissions on operation-type APIs in the production environment.
   * 
   * @example
   * true
   */
  applyProd?: boolean;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * - APP: application.
   * - USER: individual account.
   * 
   * @example
   * APP
   */
  applyType?: string;
  /**
   * @remarks
   * The list of permission types.
   * 
   * - When the principal is an application, the following permission types are supported. To apply for delegation permissions, you must also apply for usage permissions.
   * 
   *   - USE: usage permission.
   *   - DELEGATION: delegation permission.
   * - When the principal is an individual, only USE (usage) permission is supported.
   * - If this parameter is not specified, the default value is USE (usage) permission.
   */
  authTypes?: string[];
  /**
   * @remarks
   * The list of permission fields for query-type APIs in the development environment. This parameter is required in dev-prod mode. DevFieldList and ProdFieldList cannot both be empty.
   */
  devFieldList?: ApplyDataServiceApiRequestApplyCommandDevFieldList[];
  /**
   * @remarks
   * The expiration date in the format of yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-30
   */
  expireDate?: string;
  /**
   * @remarks
   * The list of permission fields for query-type APIs in the production environment. This parameter is required in basic mode.
   */
  prodFieldList?: ApplyDataServiceApiRequestApplyCommandProdFieldList[];
  /**
   * @remarks
   * The reason for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      applyDev: 'ApplyDev',
      applyProd: 'ApplyProd',
      applyType: 'ApplyType',
      authTypes: 'AuthTypes',
      devFieldList: 'DevFieldList',
      expireDate: 'ExpireDate',
      prodFieldList: 'ProdFieldList',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      appId: 'number',
      applyDev: 'boolean',
      applyProd: 'boolean',
      applyType: 'string',
      authTypes: { 'type': 'array', 'itemType': 'string' },
      devFieldList: { 'type': 'array', 'itemType': ApplyDataServiceApiRequestApplyCommandDevFieldList },
      expireDate: 'string',
      prodFieldList: { 'type': 'array', 'itemType': ApplyDataServiceApiRequestApplyCommandProdFieldList },
      reason: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authTypes)) {
      $dara.Model.validateArray(this.authTypes);
    }
    if(Array.isArray(this.devFieldList)) {
      $dara.Model.validateArray(this.devFieldList);
    }
    if(Array.isArray(this.prodFieldList)) {
      $dara.Model.validateArray(this.prodFieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The apply command.
   * 
   * This parameter is required.
   */
  applyCommand?: ApplyDataServiceApiRequestApplyCommand;
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
   * The data service project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      applyCommand: 'ApplyCommand',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyCommand: ApplyDataServiceApiRequestApplyCommand,
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    if(this.applyCommand && typeof (this.applyCommand as any).validate === 'function') {
      (this.applyCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

