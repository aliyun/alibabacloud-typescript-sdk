// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenGlobalDataRequest extends $dara.Model {
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
  extAttrStr?: string;
  maxUid?: number;
  minUid?: number;
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
  uids?: string;
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
      extAttrStr: 'ExtAttrStr',
      maxUid: 'MaxUid',
      minUid: 'MinUid',
      osType: 'OsType',
      payload: 'Payload',
      tenantId: 'TenantId',
      thirdMsgId: 'ThirdMsgId',
      uids: 'Uids',
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
      extAttrStr: 'string',
      maxUid: 'number',
      minUid: 'number',
      osType: 'string',
      payload: 'string',
      tenantId: 'string',
      thirdMsgId: 'string',
      uids: 'string',
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

