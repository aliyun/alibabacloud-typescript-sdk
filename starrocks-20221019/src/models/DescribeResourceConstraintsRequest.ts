// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceConstraintsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance architecture. Valid values:
   * - onEci: Deployed on ECI.
   * - onEcs: Deployed on ECS.
   * - onBareMetal: Deployed on a bare metal resource pool.
   * 
   * @example
   * onEcs
   */
  architecture?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * - trial: Trial edition.
   * - official: Standard edition.
   * 
   * @example
   * trial
   */
  packageType?: string;
  /**
   * @remarks
   * The running mode of the cluster. Valid values:
   * - shared_nothing: Integrated storage and compute.
   * - shared_data: Separated storage and compute.
   * - lakehouse: Data lakehouse analysis.
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

