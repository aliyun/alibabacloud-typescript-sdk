// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserHonorsRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 189477710813728
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

export class QueryUserHonorsRequest extends $dara.Model {
  tenantContext?: QueryUserHonorsRequestTenantContext;
  /**
   * @example
   * 200
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orgId: 'orgId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryUserHonorsRequestTenantContext,
      maxResults: 'number',
      nextToken: 'string',
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

