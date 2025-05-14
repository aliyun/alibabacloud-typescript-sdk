// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRelatedWorkspacesShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  includeRecent?: boolean;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      includeRecent: 'IncludeRecent',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeRecent: 'boolean',
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

