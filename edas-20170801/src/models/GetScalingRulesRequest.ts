// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScalingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 33e39be9-3e5f-*********
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance group to which the application is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * d8bb9d60-9**************
   */
  groupId?: string;
  /**
   * @remarks
   * The type of the scaling rule. You can leave this parameter empty. Valid values:
   * 
   * *   SCALE_IN: scale-in rules
   * *   SCALE_OUT: scale-out rules
   * 
   * @example
   * SCALE_IN
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

