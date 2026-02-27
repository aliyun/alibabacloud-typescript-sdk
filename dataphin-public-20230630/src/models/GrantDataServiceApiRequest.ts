// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantDataServiceApiRequestGrantCommandDevFieldList extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  apiId?: number;
  /**
   * @remarks
   * AppID
   * 
   * @example
   * 1201
   */
  appId?: number;
  applyDev?: boolean;
  applyProd?: boolean;
  authTypes?: string[];
  devFieldList?: GrantDataServiceApiRequestGrantCommandDevFieldList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-30
   */
  expireDate?: string;
  /**
   * @example
   * APP
   */
  granteeType?: string;
  prodFieldList?: GrantDataServiceApiRequestGrantCommandProdFieldList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
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
   * This parameter is required.
   */
  grantCommand?: GrantDataServiceApiRequestGrantCommand;
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

