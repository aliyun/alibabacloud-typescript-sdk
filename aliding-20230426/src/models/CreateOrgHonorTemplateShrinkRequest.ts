// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrgHonorTemplateShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
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
      tenantContextShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

