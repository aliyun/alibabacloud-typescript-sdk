// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshLoginTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @example
   * cn-shanghai+dir-238191****
   */
  officeSiteId?: string;
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
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      directoryId: 'string',
      endUserId: 'string',
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

