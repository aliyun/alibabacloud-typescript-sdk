// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDownloadInfoShrinkRequest extends $dara.Model {
  /**
   * @example
   * 798xxxxx
   */
  dentryId?: string;
  optionShrink?: string;
  /**
   * @example
   * 854xxxx
   */
  spaceId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      optionShrink: 'Option',
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      optionShrink: 'string',
      spaceId: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

