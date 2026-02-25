// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Internet access for the application. Valid values:
   * 
   * *   **true**: enables Internet access.
   * *   **false**: disables Internet access.
   * 
   * @example
   * true
   */
  internetAccess?: boolean;
  /**
   * @remarks
   * The ID of a security group.
   * 
   * @example
   * sg-bp18hj1wtxgy3b0***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of vSwitches.
   */
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

