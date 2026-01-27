// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveFotaUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The application version.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.1-D-20220513.14****
   */
  appVersion?: string;
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * d4452bd7-88df-4b90-a409-806da674****
   */
  clientId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-138dsptkrt00u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v18390c954ce59e2915ef16663205371721e0db9a46179ac89249a203320459523cb54ad08efe324784dd0eba25950****
   */
  loginToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 4771b873-c757-4893-973c-7f5beejh****
   */
  sessionId?: string;
  /**
   * @remarks
   * The state of the cloud computer after the OTA update.
   * 
   * >  This parameter is not publicly available. After the OTA update is complete, the state of the cloud computer changes to `RUNNING`.
   * 
   * *   Set the value to running.
   * 
   * @example
   * running
   */
  targetStatus?: string;
  /**
   * @remarks
   * The unique identifier of the client. To view the unique identifier of an Alibaba Cloud Workspace client, go to the client logon page and click on "About."
   * 
   * @example
   * 28c80e90-f71e-4c23-93d6-1225329c****
   */
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

