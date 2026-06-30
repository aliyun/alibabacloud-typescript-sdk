// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targetSpaceId?: string;
  tenantContextShrink?: string;
  toNextDentryId?: string;
  toParentDentryId?: string;
  toPrevDentryId?: string;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      name: 'Name',
      spaceId: 'SpaceId',
      targetSpaceId: 'TargetSpaceId',
      tenantContextShrink: 'TenantContext',
      toNextDentryId: 'ToNextDentryId',
      toParentDentryId: 'ToParentDentryId',
      toPrevDentryId: 'ToPrevDentryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      name: 'string',
      spaceId: 'string',
      targetSpaceId: 'string',
      tenantContextShrink: 'string',
      toNextDentryId: 'string',
      toParentDentryId: 'string',
      toPrevDentryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

