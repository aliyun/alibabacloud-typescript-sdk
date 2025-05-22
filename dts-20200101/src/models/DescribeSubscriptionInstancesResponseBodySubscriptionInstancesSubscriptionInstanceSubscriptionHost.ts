// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****-vpc.aliyuncs.com:18003
   */
  VPCHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      VPCHost: 'VPCHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      VPCHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

