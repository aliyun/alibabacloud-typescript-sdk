// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMountTargetResponseBodyMountTargetExtra extends $dara.Model {
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dualStackMountTargetDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

