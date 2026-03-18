// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceConstraintsRequest extends $dara.Model {
  /**
   * @example
   * onEcs
   */
  architecture?: string;
  /**
   * @example
   * trial
   */
  packageType?: string;
  /**
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

