// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  category?: string;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceIdShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  scope?: string;
  tagShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIdShrink: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      tagShrink: 'Tag',
      tagOwnerUid: 'TagOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceIdShrink: 'string',
      resourceType: 'string',
      scope: 'string',
      tagShrink: 'string',
      tagOwnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

