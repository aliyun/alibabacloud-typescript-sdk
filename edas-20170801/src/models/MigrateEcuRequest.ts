// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateEcuRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zej4i2jdf3ntwhj****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The ID of the custom namespace.
   * 
   * *   The ID of a custom namespace is in the `region ID:custom namespace ID` format. Example: cn-beijing:tdy218.
   * *   The ID of the default namespace is in the `region ID` format. Example: cn-beijing.
   * 
   * @example
   * cn-hangzhou:test_region
   */
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      logicalRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

