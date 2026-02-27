// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyDataServiceApiRequestApplyCommandDevFieldList extends $dara.Model {
  /**
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
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  apiId?: number;
  /**
   * @remarks
   * AppId
   * 
   * @example
   * 1203
   */
  appId?: number;
  applyDev?: boolean;
  applyProd?: boolean;
  /**
   * @example
   * APP
   */
  applyType?: string;
  authTypes?: string[];
  devFieldList?: ApplyDataServiceApiRequestApplyCommandDevFieldList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-30
   */
  expireDate?: string;
  prodFieldList?: ApplyDataServiceApiRequestApplyCommandProdFieldList[];
  /**
   * @remarks
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
   * This parameter is required.
   */
  applyCommand?: ApplyDataServiceApiRequestApplyCommand;
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

