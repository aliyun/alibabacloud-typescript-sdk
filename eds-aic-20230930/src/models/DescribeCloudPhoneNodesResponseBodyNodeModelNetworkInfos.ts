// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos extends $dara.Model {
  networkId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

