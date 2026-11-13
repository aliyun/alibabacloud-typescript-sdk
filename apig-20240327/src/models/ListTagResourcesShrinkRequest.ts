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
   * The resource IDs. You can specify up to 50 resource IDs. You must specify at least one of ResourceId and Tag. If both are empty, the API returns the InvalidParameter.BothEmpty (400) error.
   * 
   * @example
   * ["gw-xxx","gw-yyy"]
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type. Note: Although the documentation specifies a default value of Gateway, you must explicitly pass this parameter in actual API calls. Otherwise, the API returns the InvalidParameter.UnsupportedTagResourceType (400) error. Valid values: Gateway.
   * 
   * @example
   * Gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags. You must specify at least one of ResourceId and Tag. If both are empty, the API returns the InvalidParameter.BothEmpty (400) error.
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

