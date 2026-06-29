// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantDataServiceApiRequestGrantCommandDevFieldList extends $dara.Model {
  /**
   * @remarks
   * The API permission field ID.
   * 
   * @example
   * 1
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

export class GrantDataServiceApiRequestGrantCommandProdFieldList extends $dara.Model {
  /**
   * @remarks
   * The API permission field ID.
   * 
   * @example
   * 1
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

export class GrantDataServiceApiRequestGrantCommand extends $dara.Model {
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
   * 1201
   */
  appId?: number;
  /**
   * @remarks
   * Specifies whether to request development environment permissions for operation-type APIs.
   * 
   * @example
   * true
   */
  applyDev?: boolean;
  /**
   * @remarks
   * Specifies whether to request production environment permissions for operation-type APIs.
   * 
   * @example
   * true
   */
  applyProd?: boolean;
  /**
   * @remarks
   * The list of authorization permission types. Valid values:
   * - When the grantee is an application, the following permission types are supported. To grant delegation permissions, you must also grant usage permissions.
   *   - USE: usage permission.
   *   - DELEGATION: delegation permission.
   * - When the grantee is an individual, only USE (usage) permission is supported.
   * - If this parameter is not specified, the default value is USE (usage) permission.
   */
  authTypes?: string[];
  /**
   * @remarks
   * The list of development environment permission fields for query-type APIs. This parameter is required in dev-prod mode. DevFieldList and ProdFieldList cannot both be empty. This parameter is not required for operation-type APIs.
   */
  devFieldList?: GrantDataServiceApiRequestGrantCommandDevFieldList[];
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
   * The authorization object type. Valid values:
   * - APP: application.
   * - USER: user.
   * 
   * @example
   * APP
   */
  granteeType?: string;
  /**
   * @remarks
   * The list of production environment permission fields for query-type APIs. This parameter is required in basic mode. This parameter is not required for operation-type APIs.
   */
  prodFieldList?: GrantDataServiceApiRequestGrantCommandProdFieldList[];
  /**
   * @remarks
   * The reason for the authorization request.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      applyDev: 'ApplyDev',
      applyProd: 'ApplyProd',
      authTypes: 'AuthTypes',
      devFieldList: 'DevFieldList',
      expireDate: 'ExpireDate',
      granteeType: 'GranteeType',
      prodFieldList: 'ProdFieldList',
      reason: 'Reason',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      appId: 'number',
      applyDev: 'boolean',
      applyProd: 'boolean',
      authTypes: { 'type': 'array', 'itemType': 'string' },
      devFieldList: { 'type': 'array', 'itemType': GrantDataServiceApiRequestGrantCommandDevFieldList },
      expireDate: 'string',
      granteeType: 'string',
      prodFieldList: { 'type': 'array', 'itemType': GrantDataServiceApiRequestGrantCommandProdFieldList },
      reason: 'string',
      userId: 'string',
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

export class GrantDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The grant command.
   * 
   * This parameter is required.
   */
  grantCommand?: GrantDataServiceApiRequestGrantCommand;
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
      grantCommand: 'GrantCommand',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantCommand: GrantDataServiceApiRequestGrantCommand,
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    if(this.grantCommand && typeof (this.grantCommand as any).validate === 'function') {
      (this.grantCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

