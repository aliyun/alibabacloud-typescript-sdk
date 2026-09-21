// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NetworkConfiguration extends $dara.Model {
  /**
   * @example
   * PUBLIC_AND_PRIVATE
   */
  networkMode?: string;
  /**
   * @example
   * sg-****
   */
  securityGroupID?: string;
  /**
   * @example
   * vpc-****
   */
  vpcID?: string;
  vswitchIDs?: string[];
  static names(): { [key: string]: string } {
    return {
      networkMode: 'networkMode',
      securityGroupID: 'securityGroupID',
      vpcID: 'vpcID',
      vswitchIDs: 'vswitchIDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkMode: 'string',
      securityGroupID: 'string',
      vpcID: 'string',
      vswitchIDs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchIDs)) {
      $dara.Model.validateArray(this.vswitchIDs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

