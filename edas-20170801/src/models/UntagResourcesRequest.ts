// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all existing tags from the specified resources. Default value: false. Valid values:
   * 
   * *   **true**: removes all existing tags from the specified resources.
   * *   **false**: does not remove all existing tags from the specified resources.
   * 
   * > All existing tags of a resource are removed only if the **tagKeys** parameter is left empty and the **DeleteAll** parameter is set to true.
   * 
   * @example
   * true
   */
  deleteAll?: boolean;
  /**
   * @remarks
   * The IDs of the resources from which you want to remove tags. You can specify up to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["f5ad6ff7-xxxx-xxxx-xxxx-2axxxx82xxxx"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * The region in which the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
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
   * The tags that you want to remove. You can specify up to 20 tags. Set this parameter to a JSON array.
   * 
   * @example
   * ["tagKey1","tagKey2"]
   */
  tagKeys?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAll: 'DeleteAll',
      resourceIds: 'ResourceIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAll: 'boolean',
      resourceIds: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
      tagKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

