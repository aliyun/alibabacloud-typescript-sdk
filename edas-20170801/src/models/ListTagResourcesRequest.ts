// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the resources. You can specify up to 20 IDs. Set this parameter to a JSON array.
   * 
   * @example
   * ["000e5836-xxxx-xxxx-xxxx-0d6ab2ac4877"]
   */
  resourceIds?: { [key: string]: any };
  /**
   * @remarks
   * The region in which the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **application**: Enterprise Distributed Application Service (EDAS) application
   * *   **cluster**: EDAS cluster
   * 
   * This parameter is required.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * The key-value pairs that specify the tags.
   * 
   * *   You can add up to 20 tags to a resource.
   * *   The key cannot start with **aliyun** or **acs:** and cannot contain **http://** or **https://**.
   * *   The tag key or tag value can be up to 128 characters in length, and can contain letters, digits, hyphens (-), commas (,), asterisks (\\*), forward slashes (/), question marks (?), and colons (:).
   * *   Set this parameter to a JSON array.
   * 
   * @example
   * [{"key":"key1","value":"v1"},{"key":"key2","value":"v2"}]
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceRegionId: 'string',
      resourceType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.resourceIds) {
      $dara.Model.validateMap(this.resourceIds);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

