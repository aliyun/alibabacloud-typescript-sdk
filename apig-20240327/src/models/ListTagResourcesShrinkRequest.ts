// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The token for the next query start position.
   * 
   * @example
   * caeb235b-xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource ID. Up to 50 subkeys are supported. At least one of ResourceId and Tag must be provided. If both are empty, the API returns InvalidParameter.BothEmpty (400).
   * 
   * @example
   * ["gw-xxx","gw-yyy"]
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The label list. Up to 20 subkeys are supported. At least one of ResourceId and Tag must be provided. If both are empty, the API returns InvalidParameter.BothEmpty (400).
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

