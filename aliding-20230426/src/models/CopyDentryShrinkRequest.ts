// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b9XJljElJv6RPGyA
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
   * 
   * @example
   * 24458420428
   */
  spaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b9XJljElJv6RPG
   */
  targetSpaceId?: string;
  tenantContextShrink?: string;
  /**
   * @example
   * b9XJljElJv6RPGyA2
   */
  toNextDentryId?: string;
  /**
   * @example
   * b9XJljElJv6RPGyA4
   */
  toParentDentryId?: string;
  /**
   * @example
   * b9XJljElJv6RPGyA3
   */
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

