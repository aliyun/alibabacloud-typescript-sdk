// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesClusterStateUserSlbDtoUserSlbListeners } from "./DescribeInstancesResponseBodyInstancesClusterStateUserSlbDtoUserSlbListeners";


export class DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto extends $dara.Model {
  existSlb?: boolean;
  slbId?: string;
  slbIp?: string;
  slbStatus?: string;
  userSlbListeners?: DescribeInstancesResponseBodyInstancesClusterStateUserSlbDtoUserSlbListeners[];
  static names(): { [key: string]: string } {
    return {
      existSlb: 'ExistSlb',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbStatus: 'SlbStatus',
      userSlbListeners: 'UserSlbListeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existSlb: 'boolean',
      slbId: 'string',
      slbIp: 'string',
      slbStatus: 'string',
      userSlbListeners: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesClusterStateUserSlbDtoUserSlbListeners },
    };
  }

  validate() {
    if(Array.isArray(this.userSlbListeners)) {
      $dara.Model.validateArray(this.userSlbListeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

