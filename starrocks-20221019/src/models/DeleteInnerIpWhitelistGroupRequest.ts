// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInnerIpWhitelistGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-g1
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
      innerIpWhitelistGroupId: 'InnerIpWhitelistGroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerIpWhitelistGroupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

