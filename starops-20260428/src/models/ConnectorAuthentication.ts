// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConnectorAuthenticationBasic extends $dara.Model {
  /**
   * @remarks
   * Username
   * 
   * This parameter is required.
   * 
   * @example
   * starops
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectorAuthenticationBotToken extends $dara.Model {
  /**
   * @remarks
   * Bot ID
   * 
   * This parameter is required.
   * 
   * @example
   * bot-123456
   */
  botId?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'botId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectorAuthenticationOauth extends $dara.Model {
  /**
   * @remarks
   * OAuth client ID
   * 
   * This parameter is required.
   * 
   * @example
   * client-id
   */
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectorAuthenticationRole extends $dara.Model {
  /**
   * @remarks
   * Role ARN
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::1234567890123456:role/starops-reader
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectorAuthenticationSatellite extends $dara.Model {
  /**
   * @remarks
   * Local credential binding name
   * 
   * This parameter is required.
   * 
   * @example
   * private-gitlab
   */
  bindingName?: string;
  static names(): { [key: string]: string } {
    return {
      bindingName: 'bindingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectorAuthentication extends $dara.Model {
  /**
   * @remarks
   * The security identity information for basic authentication, excluding the password.
   */
  basic?: ConnectorAuthenticationBasic;
  /**
   * @remarks
   * The security identity information for the bot, excluding the token and signing key.
   */
  botToken?: ConnectorAuthenticationBotToken;
  /**
   * @remarks
   * The security identity information for OAuth, excluding the client secret.
   */
  oauth?: ConnectorAuthenticationOauth;
  /**
   * @remarks
   * The security identity information based on the RAM role ARN.
   */
  role?: ConnectorAuthenticationRole;
  /**
   * @remarks
   * The security identity information based on local credential binding.
   */
  satellite?: ConnectorAuthenticationSatellite;
  /**
   * @remarks
   * Authentication type
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      basic: 'basic',
      botToken: 'botToken',
      oauth: 'oauth',
      role: 'role',
      satellite: 'satellite',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basic: ConnectorAuthenticationBasic,
      botToken: ConnectorAuthenticationBotToken,
      oauth: ConnectorAuthenticationOauth,
      role: ConnectorAuthenticationRole,
      satellite: ConnectorAuthenticationSatellite,
      type: 'string',
    };
  }

  validate() {
    if(this.basic && typeof (this.basic as any).validate === 'function') {
      (this.basic as any).validate();
    }
    if(this.botToken && typeof (this.botToken as any).validate === 'function') {
      (this.botToken as any).validate();
    }
    if(this.oauth && typeof (this.oauth as any).validate === 'function') {
      (this.oauth as any).validate();
    }
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    if(this.satellite && typeof (this.satellite as any).validate === 'function') {
      (this.satellite as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

