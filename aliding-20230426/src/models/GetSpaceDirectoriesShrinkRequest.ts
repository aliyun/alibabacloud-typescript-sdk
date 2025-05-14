// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpaceDirectoriesShrinkRequest extends $dara.Model {
  /**
   * @example
   * asdasd
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * 123123
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qweqwe
   */
  spaceId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

