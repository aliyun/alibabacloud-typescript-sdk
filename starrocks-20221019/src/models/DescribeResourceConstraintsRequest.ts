// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceConstraintsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the instance architecture. Valid values:
   * 
   * - onEci: The instance is deployed on ECI.
   * 
   * - onEcs: The instance is deployed on ECS.
   * 
   * - onBareMetal: The instance is deployed on a bare metal resource pool.
   * 
   * @example
   * onEcs
   */
  architecture?: string;
  /**
   * @remarks
   * Specifies the instance edition. Valid values:
   * 
   * - trial: The entry-level edition.
   * 
   * - official: The Standard Edition.
   * 
   * @example
   * trial
   */
  packageType?: string;
  /**
   * @remarks
   * Specifies the run mode of the cluster. Valid values:
   * 
   * - shared_nothing: The shared-nothing mode.
   * 
   * - shared_data: The shared-data mode.
   * 
   * - lakehouse: The data lake analytics mode.
   * 
   * @example
   * shared_data
   */
  runMode?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      packageType: 'PackageType',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      packageType: 'string',
      runMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

