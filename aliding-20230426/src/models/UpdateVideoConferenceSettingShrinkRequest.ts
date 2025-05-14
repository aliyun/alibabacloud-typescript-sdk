// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoConferenceSettingShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
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
      tenantContextShrink: 'string',
      conferenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

