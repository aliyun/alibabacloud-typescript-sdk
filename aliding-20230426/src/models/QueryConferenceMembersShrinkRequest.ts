// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConferenceMembersShrinkRequest extends $dara.Model {
  /**
   * @example
   * 300
   */
  maxResults?: number;
  /**
   * @example
   * 123000000
   */
  nextToken?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tenantContextShrink: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      tenantContextShrink: 'string',
      conferenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

