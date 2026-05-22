// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdByOpenDingtalkIdRequestTenantContext extends $dara.Model {
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

export class GetUserIdByOpenDingtalkIdRequest extends $dara.Model {
  tenantContext?: GetUserIdByOpenDingtalkIdRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DTOJdYJ2IQC4HuexhtjsSXXXX
   */
  openDingtalkId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      openDingtalkId: 'openDingtalkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetUserIdByOpenDingtalkIdRequestTenantContext,
      openDingtalkId: 'string',
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

