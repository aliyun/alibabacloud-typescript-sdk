// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * caeb235b-xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs. Up to 50 items are supported. You must specify at least one of ResourceId or Tag. If both are empty, the API returns InvalidParameter.BothEmpty(400).
   * 
   * @example
   * ["gw-xxx","gw-yyy"]
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type. Although the documentation indicates a default value of Gateway, you must explicitly pass this parameter when calling the API. Otherwise, the API returns InvalidParameter.UnsupportedTagResourceType(400). Valid values: Gateway.
   * 
   * @example
   * Gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The label list. Up to 20 items are supported. You must specify at least one of ResourceId or Tag. If both are empty, the API returns InvalidParameter.BothEmpty(400).
   * 
   * @example
   * [{"key":"env","value":"prod"}]
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceIdShrink: 'ResourceId',
      resourceType: 'ResourceType',
      tagShrink: 'Tag',
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

