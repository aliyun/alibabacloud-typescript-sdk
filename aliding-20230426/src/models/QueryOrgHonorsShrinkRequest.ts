// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrgHonorsShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * 48
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  orgId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orgId: 'orgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

