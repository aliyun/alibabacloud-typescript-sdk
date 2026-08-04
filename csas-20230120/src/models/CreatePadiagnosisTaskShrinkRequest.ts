// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePADiagnosisTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the terminal device.
   * 
   * @example
   * 2987b3e0-8108-2f99-4d18-3b4f1c1c36d7
   */
  devTag?: string;
  /**
   * @remarks
   * The diagnosis type. Valid values:
   * 
   * - **FullLink**: full-link diagnosis.
   * - **Application**: application diagnosis.
   * 
   * This parameter is required.
   * 
   * @example
   * FullLink
   */
  diagnoseType?: string;
  /**
   * @remarks
   * The address to diagnose.
   * 
   * This parameter is required.
   * 
   * @example
   * socialapp-gateway.client9.me
   */
  host?: string;
  /**
   * @remarks
   * The POP point ID.
   * 
   * @example
   * pop-3e244b62357dcafc
   */
  popId?: string;
  /**
   * @remarks
   * The POP point selection mode. Valid values:
   * - **AutoSelect**: automatic selection.
   * - **ManualSelect**: manual selection.
   * 
   * This parameter is required.
   * 
   * @example
   * ManualSelect
   */
  popMode?: string;
  /**
   * @remarks
   * The port.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The protocol used by the internal network access application. Valid values:
   * - **TCP**
   * - **UDP**.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The extra configurations for UDP diagnosis. If this parameter is not specified, any response received is considered a success.
   */
  udpExtraConfigsShrink?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 用户组ID。
   */
  userGroupId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Zhaosi
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      devTag: 'DevTag',
      diagnoseType: 'DiagnoseType',
      host: 'Host',
      popId: 'PopId',
      popMode: 'PopMode',
      port: 'Port',
      protocol: 'Protocol',
      udpExtraConfigsShrink: 'UdpExtraConfigs',
      userGroupId: 'UserGroupId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
      diagnoseType: 'string',
      host: 'string',
      popId: 'string',
      popMode: 'string',
      port: 'string',
      protocol: 'string',
      udpExtraConfigsShrink: 'string',
      userGroupId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

