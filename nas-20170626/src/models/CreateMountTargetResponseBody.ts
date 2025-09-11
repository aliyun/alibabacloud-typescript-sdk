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

export class CreateMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv4 domain name of the mount target.
   * 
   * @example
   * 174494b666-x****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The information about the mount target.
   */
  mountTargetExtra?: CreateMountTargetResponseBodyMountTargetExtra;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70EACC9C-D07A-4A34-ADA4-77506C42****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      mountTargetExtra: 'MountTargetExtra',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      mountTargetExtra: CreateMountTargetResponseBodyMountTargetExtra,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mountTargetExtra && typeof (this.mountTargetExtra as any).validate === 'function') {
      (this.mountTargetExtra as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

