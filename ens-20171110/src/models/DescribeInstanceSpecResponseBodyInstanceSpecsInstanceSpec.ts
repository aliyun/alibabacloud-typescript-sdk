// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  core?: string;
  /**
   * @remarks
   * The display name of the instance type.
   * 
   * @example
   * Computational 1C2G
   */
  displayName?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * ens.sn1.stiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 2048
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      displayName: 'DisplayName',
      instanceType: 'InstanceType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'string',
      displayName: 'string',
      instanceType: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

