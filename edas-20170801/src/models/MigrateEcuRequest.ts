// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateEcuRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances. To specify multiple instances, separate the IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zej4i2jdf3ntwhj****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * - A custom namespace ID is in the format `Region ID:Namespace identifier`. Example: cn-beijing:tdy218.
   * 
   * - A default namespace ID is the same as its region ID. Example: cn-beijing.
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

