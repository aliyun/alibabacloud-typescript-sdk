// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyResultNetwork extends $dara.Model {
  /**
   * @remarks
   * The public domain name whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  allow?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * ha-cn-35t3r****.ha.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * ha-cn-35t3ni****.public.ha.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp11ldcf59q2n****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-wz9axk41d9vff****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'allow',
      endpoint: 'endpoint',
      publicEndpoint: 'publicEndpoint',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'string',
      endpoint: 'string',
      publicEndpoint: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

