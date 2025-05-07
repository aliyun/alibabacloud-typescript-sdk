// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRecordContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clientId?: string;
  clientOS?: string;
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

