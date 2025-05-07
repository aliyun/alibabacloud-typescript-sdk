// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindUserDesktopRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 58f96f67-7944-4f97-9342-****
   */
  clientId?: string;
  /**
   * @remarks
   * The client type.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Specifies whether to enable forced unbinding.
   * 
   * Valid values:
   * 
   * *   true: Even when end users connect to cloud computers, the forced unbinding is still enforced.
   * *   false: Forced unbinding is only enforced when end users are disconnected from cloud computers.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v12307f5e0****
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
   * This parameter is required.
   * 
   * @example
   * 3b053331-dc98-43d8-b247-****
   */
  sessionId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ud-sdfs****
   */
  userDesktopId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientType: 'ClientType',
      force: 'Force',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      userDesktopId: 'UserDesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientType: 'string',
      force: 'boolean',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      userDesktopId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

