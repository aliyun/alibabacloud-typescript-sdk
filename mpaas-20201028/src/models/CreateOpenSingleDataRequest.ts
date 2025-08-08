// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenSingleDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  appMaxVersion?: string;
  appMinVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bizType?: string;
  checkOnline?: boolean;
  extAttrStr?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  linkToken?: string;
  osType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: string;
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  thirdMsgId?: string;
  validTimeEnd?: number;
  validTimeStart?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appMaxVersion: 'AppMaxVersion',
      appMinVersion: 'AppMinVersion',
      bizType: 'BizType',
      checkOnline: 'CheckOnline',
      extAttrStr: 'ExtAttrStr',
      linkToken: 'LinkToken',
      osType: 'OsType',
      payload: 'Payload',
      tenantId: 'TenantId',
      thirdMsgId: 'ThirdMsgId',
      validTimeEnd: 'ValidTimeEnd',
      validTimeStart: 'ValidTimeStart',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appMaxVersion: 'string',
      appMinVersion: 'string',
      bizType: 'string',
      checkOnline: 'boolean',
      extAttrStr: 'string',
      linkToken: 'string',
      osType: 'string',
      payload: 'string',
      tenantId: 'string',
      thirdMsgId: 'string',
      validTimeEnd: 'number',
      validTimeStart: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

