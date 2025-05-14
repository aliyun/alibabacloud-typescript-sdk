// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  nextToken?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
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

