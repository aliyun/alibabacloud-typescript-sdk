// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dentry_uuid
   */
  dentryUuid?: string;
  /**
   * @example
   * markdown
   */
  targetFormat?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      targetFormat: 'TargetFormat',
      tenantContextShrink: 'TenantContext',
      userToken: 'userToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      targetFormat: 'string',
      tenantContextShrink: 'string',
      userToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

