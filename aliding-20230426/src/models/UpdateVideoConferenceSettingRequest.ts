// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoConferenceSettingRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoConferenceSettingRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowUnmuteSelf?: boolean;
  /**
   * @example
   * true
   */
  autoTransferHost?: boolean;
  /**
   * @example
   * true
   */
  forbiddenShareScreen?: boolean;
  /**
   * @example
   * true
   */
  lockConference?: boolean;
  /**
   * @example
   * true
   */
  muteAll?: boolean;
  /**
   * @example
   * true
   */
  onlyInternalEmployeesJoin?: boolean;
  tenantContext?: UpdateVideoConferenceSettingRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowUnmuteSelf: 'AllowUnmuteSelf',
      autoTransferHost: 'AutoTransferHost',
      forbiddenShareScreen: 'ForbiddenShareScreen',
      lockConference: 'LockConference',
      muteAll: 'MuteAll',
      onlyInternalEmployeesJoin: 'OnlyInternalEmployeesJoin',
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUnmuteSelf: 'boolean',
      autoTransferHost: 'boolean',
      forbiddenShareScreen: 'boolean',
      lockConference: 'boolean',
      muteAll: 'boolean',
      onlyInternalEmployeesJoin: 'boolean',
      tenantContext: UpdateVideoConferenceSettingRequestTenantContext,
      conferenceId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

