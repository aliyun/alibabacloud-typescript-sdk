// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceTypeAutoEnableRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  regionNo?: string;
  /**
   * @example
   * {"SlbEIP":true,"GaEIP":false,"EcsIPv6":true,"NatPublicIP":true,"SlbIPv6":false,"BastionHostIngressIP":false,"EIP":true,"NatEIP":true,"SlbPublicIP":true,"EcsEIP":true,"EniEIP":true,"HAVIP":true,"NlbEIP":true,"NlbIPv6":false,"EniEIPv6":false,"EcsPublicIP":true,"AlbIPv6":true,"BastionHostIP":false,"BastionHostEgressIP":true,"GaEIPV6":false,"AlbEIP":false}
   */
  resourceTypeAutoEnable?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionNo: 'RegionNo',
      resourceTypeAutoEnable: 'ResourceTypeAutoEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionNo: 'string',
      resourceTypeAutoEnable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

