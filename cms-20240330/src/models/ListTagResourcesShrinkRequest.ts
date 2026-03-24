// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. The maximum value is 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of resource IDs.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * Service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. These are used as filter conditions for the query.
   * 
   * You can specify up to 20 tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

