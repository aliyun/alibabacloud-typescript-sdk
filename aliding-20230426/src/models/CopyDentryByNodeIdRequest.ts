// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryByNodeIdRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDentryByNodeIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P7QG4Yx2Jpx4OolYC1QPg5BaJ9dEq3XD
   */
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  tenantContext?: CopyDentryByNodeIdRequestTenantContext;
  /**
   * @example
   * P7QG4Yx2Jpx4OolYC1QPg5BaJ9dEq3XD
   */
  toNextNodeId?: string;
  /**
   * @example
   * P7QG4Yx2Jpx4OolYC1QPg5BaJ9dEq3XD
   */
  toParentNodeId?: string;
  /**
   * @example
   * P7QG4Yx2Jpx4OolYC1QPg5BaJ9dEq3XD
   */
  toPrevNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      name: 'Name',
      tenantContext: 'TenantContext',
      toNextNodeId: 'ToNextNodeId',
      toParentNodeId: 'ToParentNodeId',
      toPrevNodeId: 'ToPrevNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      name: 'string',
      tenantContext: CopyDentryByNodeIdRequestTenantContext,
      toNextNodeId: 'string',
      toParentNodeId: 'string',
      toPrevNodeId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

