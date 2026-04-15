// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryGroupMemberShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      coolAppCode: 'CoolAppCode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      openConversationId: 'OpenConversationId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolAppCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      openConversationId: 'string',
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

