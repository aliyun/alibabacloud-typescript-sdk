// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebNetworkConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  internetAccess?: boolean;
  /**
   * @example
   * sg-bp18hj1wtxgy3b0***
   */
  securityGroupId?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      internetAccess: 'InternetAccess',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetAccess: 'boolean',
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

