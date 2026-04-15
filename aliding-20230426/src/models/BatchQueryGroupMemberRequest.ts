// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryGroupMemberRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
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

export class BatchQueryGroupMemberRequest extends $dara.Model {
  /**
   * @example
   * COOLAPP_XXXXX
   */
  coolAppCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * weqrwereqsadqaadfafa
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidt*****Xa4K10w==
   */
  openConversationId?: string;
  tenantContext?: BatchQueryGroupMemberRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      coolAppCode: 'CoolAppCode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      openConversationId: 'OpenConversationId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolAppCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      openConversationId: 'string',
      tenantContext: BatchQueryGroupMemberRequestTenantContext,
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

