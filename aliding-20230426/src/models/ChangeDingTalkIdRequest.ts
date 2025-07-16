// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDingTalkIdRequestTenantContext extends $dara.Model {
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

export class ChangeDingTalkIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4uf_iw54grufg9
   */
  dingTalkId?: string;
  tenantContext?: ChangeDingTalkIdRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dingTalkId: 'DingTalkId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingTalkId: 'string',
      tenantContext: ChangeDingTalkIdRequestTenantContext,
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

