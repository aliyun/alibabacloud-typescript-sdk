// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateResourceInventoryRequest extends $dara.Model {
  /**
   * @remarks
   * The regions where the resources are located. Separate multiple regions with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  regions?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * 
   * - 1 (default): The resource is retained.
   * 
   * - 0: The resource is deleted.
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

