// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. Default value: **false**. This parameter is valid only when **TagKeys** is empty.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The list of resources to delete.
   * 
   * @example
   * ["es-cn-09k1rocex0006****","es-cn-oew1rgiev0009****"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type. Set this to **INSTANCE**.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags to delete. A maximum of 20 items can be specified.
   * 
   * @example
   * ["tagKey1","tagKey2"]
   */
  tagKeys?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceIds: 'string',
      resourceType: 'string',
      tagKeys: 'string',
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

