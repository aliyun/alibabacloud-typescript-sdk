// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityIPGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * g-rcge12hbfooad3m****
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityGroupId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

