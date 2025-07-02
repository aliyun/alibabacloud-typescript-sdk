// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of resources to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::FC:FUNCTION
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can query up to 20 tags at a time.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      resourceIdShrink: 'ResourceId',
      resourceType: 'ResourceType',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
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

