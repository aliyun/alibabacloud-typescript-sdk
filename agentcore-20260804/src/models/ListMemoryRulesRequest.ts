// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters rules by enabled status.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * nameLike
   * 
   * @example
   * Preference
   */
  nameLike?: string;
  /**
   * @remarks
   * The pagination token returned for the same resource and filter conditions.
   * 
   * @example
   * eyJvZmZzZXQiOjIwMH0=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      maxResults: 'maxResults',
      nameLike: 'nameLike',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      maxResults: 'number',
      nameLike: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

