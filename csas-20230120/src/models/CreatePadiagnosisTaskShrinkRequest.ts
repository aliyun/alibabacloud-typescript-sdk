// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePADiagnosisTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2987b3e0-8108-2f99-4d18-3b4f1c1c36d7
   */
  devTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FullLink
   */
  diagnoseType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * socialapp-gateway.client9.me
   */
  host?: string;
  /**
   * @example
   * pop-3e244b62357dcafc
   */
  popId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ManualSelect
   */
  popMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  udpExtraConfigsShrink?: string;
  userGroupId?: string;
  /**
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

