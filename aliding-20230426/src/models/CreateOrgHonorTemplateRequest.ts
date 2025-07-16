// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrgHonorTemplateRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 123456
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

export class CreateOrgHonorTemplateRequest extends $dara.Model {
  tenantContext?: CreateOrgHonorTemplateRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fsdfasdjf132342d
   */
  avatarFrameMediaId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * #FFFBB4
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
   * 
   * @example
   * 1273adf23
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
   * 
   * @example
   * 123456
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 363784
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

