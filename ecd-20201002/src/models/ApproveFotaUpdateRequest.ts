// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveFotaUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.0.1-D-20220513.14****
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d4452bd7-88df-4b90-a409-806da674****
   */
  clientId?: string;
  /**
   * @example
   * ecd-138dsptkrt00u****
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v18390c954ce59e2915ef16663205371721e0db9a46179ac89249a203320459523cb54ad08efe324784dd0eba25950****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 4771b873-c757-4893-973c-7f5beejh****
   */
  sessionId?: string;
  targetStatus?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      clientId: 'ClientId',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      targetStatus: 'TargetStatus',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      clientId: 'string',
      desktopId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      targetStatus: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

