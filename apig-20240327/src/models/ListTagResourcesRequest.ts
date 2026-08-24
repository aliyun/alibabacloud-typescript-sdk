// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
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
  resourceId?: string[];
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
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

