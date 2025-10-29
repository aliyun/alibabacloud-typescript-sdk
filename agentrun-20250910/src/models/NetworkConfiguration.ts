// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NetworkConfiguration extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  networkMode?: string;
  /**
   * @example
   * sg-1234567890abcdef0
   */
  securityGroupId?: string;
  /**
   * @example
   * vpc-1234567890abcdef0
   */
  vpcId?: string;
  /**
   * @example
   * vsw-1234567890abcdef0,vsw-abcdef1234567890
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      networkMode: 'networkMode',
      securityGroupId: 'securityGroupId',
      vpcId: 'vpcId',
      vswitchIds: 'vswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkMode: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

