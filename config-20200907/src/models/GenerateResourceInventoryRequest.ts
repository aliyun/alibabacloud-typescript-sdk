// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateResourceInventoryRequest extends $dara.Model {
  /**
   * @remarks
   * The region IDs of the resources. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  regions?: string;
  /**
   * @remarks
   * Indicates whether the resource is deleted. Valid values:
   * 
   * *   1 (default): The resource is retained.
   * *   0: The resource is deleted.
   * 
   * @example
   * 1
   */
  resourceDeleted?: number;
  /**
   * @remarks
   * The resource types. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      resourceDeleted: 'ResourceDeleted',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: 'string',
      resourceDeleted: 'number',
      resourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

