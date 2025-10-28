// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the resources. You can specify up to 20 IDs in the format of a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * ["000e5836-xxxx-xxxx-xxxx-0d6ab2ac4877"]
   */
  resourceIds?: string;
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
   * The key-value pairs. When you set this parameter, take note of the following limits:
   * 
   * *   You can add up to 20 tags to a resource.
   * *   The tag key cannot start with **aliyun** or **acs:**. It cannot contain **http://** or **https://**.
   * *   The tag key or tag value can be up to 128 characters in length, and can contain letters, digits, hyphens (-), commas (,), asterisks (\\*), forward slashes (/), question marks (?), and colons (:).
   * *   Set this parameter to a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"key":"key1","value":"v1"},{"key":"key2","value":"v2"}]
   */
  tags?: string;
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
      resourceIds: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

