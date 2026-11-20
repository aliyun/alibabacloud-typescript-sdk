// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token. An empty value indicates that no additional pages exist.
   * 
   * @example
   * eyJuZXh0IjoiNDAifQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * @example
   * ["space-a","space-b"]
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type. Set the value to agentspace.
   * 
   * This parameter is required.
   * 
   * @example
   * agentspace
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag filter conditions. Multiple conditions are combined with the AND operator. At least one of resourceId and tag must be specified.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

