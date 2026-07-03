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
   * The token that determines the start point of the next query.
   * 
   * @example
   * caeb235b-xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource ID. You can specify up to 50 subkeys.
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
   * The list of labels to add. You can specify up to 20 subkeys.
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

