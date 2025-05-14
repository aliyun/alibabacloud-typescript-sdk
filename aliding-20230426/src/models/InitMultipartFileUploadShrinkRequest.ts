// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitMultipartFileUploadShrinkRequest extends $dara.Model {
  optionShrink?: string;
  /**
   * @example
   * dentryUuid
   */
  parentDentryUuid?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      optionShrink: 'Option',
      parentDentryUuid: 'ParentDentryUuid',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionShrink: 'string',
      parentDentryUuid: 'string',
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

