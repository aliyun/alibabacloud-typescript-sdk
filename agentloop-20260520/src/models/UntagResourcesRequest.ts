// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disassociate all user-defined tags. Valid values: true, false, and an empty string. If this parameter is not specified or is set to an empty string, it is treated as false. The value true indicates that all tags are disassociated only when the tagKey parameter is not specified or is an empty array.
   * 
   * @example
   * true
   */
  all?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["space-a","space-b"]
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. The value is fixed to agentspace.
   * 
   * This parameter is required.
   * 
   * @example
   * agentspace
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys to disassociate. You can specify up to 20 tag keys, and they must be unique. If this parameter is not empty, it takes precedence over the all parameter.
   * 
   * @example
   * ["key1", "key2", "key3"]
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

