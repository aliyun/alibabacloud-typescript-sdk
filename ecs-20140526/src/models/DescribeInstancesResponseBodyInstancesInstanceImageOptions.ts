// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceImageOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operating system supports access to disks over the NVMe protocol. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is returned only if you specify CURRENT_OS_NVME_SUPPORTED in AdditionalAttributes in the request.
   * 
   * @example
   * true
   */
  currentOSNVMeSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the instance that uses the image supports logons of the ecs-user user. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentOSNVMeSupported: 'CurrentOSNVMeSupported',
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentOSNVMeSupported: 'boolean',
      loginAsNonRoot: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

