// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudDriveServiceMountTokenRequest extends $dara.Model {
  /**
   * @example
   * 00e122c3-13fb-4fc3-bc7a-5d9acb89****
   */
  clientId?: string;
  /**
   * @example
   * v1972cd3446f0e523598916520951742474e6624fcdea6652994d47bc6157d27f7cc900c339db67882j3no4nh5bk3b4****
   */
  loginToken?: string;
  /**
   * @example
   * cn-hangzhou+dir-7186763****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 14e1fe41-ce9b-491d-aa8c-345jk2n4bk****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
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

