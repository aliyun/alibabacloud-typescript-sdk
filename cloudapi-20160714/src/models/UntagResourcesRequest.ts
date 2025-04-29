// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. This parameter is valid only when the **TagKey.N**parameter is not specified. Default value: false. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 285bb759342649a1b70c2093a772e087
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Tags are bound to API groups, plug-ins, and applications. You can use tags to manage cloud resources by group. Valid values:
   * 
   * *   **apiGroup**
   * *   **plugin**
   * *   **app**
   * 
   * This parameter is required.
   * 
   * @example
   * apiGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * 0f96f124-1276-4f81-b52b-c554240beb4c
   */
  securityToken?: string;
  /**
   * @remarks
   * The tag keys of the resource.
   * 
   * @example
   * env
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
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

