// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInnerIpWhitelistGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cidrIpList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-28sjsi12bs1
   */
  innerIpWhitelistGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-0104730e9de40215
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIpList: 'CidrIpList',
      innerIpWhitelistGroupId: 'InnerIpWhitelistGroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIpList: { 'type': 'array', 'itemType': 'string' },
      innerIpWhitelistGroupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrIpList)) {
      $dara.Model.validateArray(this.cidrIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

