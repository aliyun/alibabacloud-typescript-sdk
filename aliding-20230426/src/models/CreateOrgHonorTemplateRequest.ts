// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrgHonorTemplateRequestTenantContext extends $dara.Model {
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

export class CreateOrgHonorTemplateRequest extends $dara.Model {
  tenantContext?: CreateOrgHonorTemplateRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   */
  avatarFrameMediaId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  defaultBgColor?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  medalDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  medalMediaId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  medalName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      avatarFrameMediaId: 'avatarFrameMediaId',
      defaultBgColor: 'defaultBgColor',
      medalDesc: 'medalDesc',
      medalMediaId: 'medalMediaId',
      medalName: 'medalName',
      orgId: 'orgId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: CreateOrgHonorTemplateRequestTenantContext,
      avatarFrameMediaId: 'string',
      defaultBgColor: 'string',
      medalDesc: 'string',
      medalMediaId: 'string',
      medalName: 'string',
      orgId: 'number',
      userId: 'string',
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

