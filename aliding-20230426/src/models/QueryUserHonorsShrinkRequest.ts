// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserHonorsShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  nextToken?: string;
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
      tenantContextShrink: 'TenantContext',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orgId: 'orgId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

