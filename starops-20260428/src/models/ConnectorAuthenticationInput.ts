// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectorAuthenticationInputBasic extends $dara.Model {
  /**
   * @remarks
   * Password
   * 
   * This parameter is required.
   * 
   * @example
   * example-password
   */
  password?: string;
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
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
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

export class ConnectorAuthenticationInputBotToken extends $dara.Model {
  /**
   * @remarks
   * Bot token
   * 
   * This parameter is required.
   * 
   * @example
   * example-bot-token
   */
  botToken?: string;
  /**
   * @remarks
   * Signing secret
   * 
   * @example
   * example-signing-secret
   */
  signingSecret?: string;
  static names(): { [key: string]: string } {
    return {
      botToken: 'botToken',
      signingSecret: 'signingSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botToken: 'string',
      signingSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectorAuthenticationInputOauth extends $dara.Model {
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
  /**
   * @remarks
   * OAuth client secret
   * 
   * This parameter is required.
   * 
   * @example
   * example-client-secret
   */
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectorAuthenticationInputPatToken extends $dara.Model {
  /**
   * @remarks
   * The personal access token used to access the target service.
   * 
   * This parameter is required.
   * 
   * @example
   * example-personal-access-token
   */
  patToken?: string;
  static names(): { [key: string]: string } {
    return {
      patToken: 'patToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectorAuthenticationInputRole extends $dara.Model {
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

export class ConnectorAuthenticationInputSatellite extends $dara.Model {
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

export class ConnectorAuthenticationInput extends $dara.Model {
  /**
   * @remarks
   * Authenticates by using a username and password.
   */
  basic?: ConnectorAuthenticationInputBasic;
  /**
   * @remarks
   * Authenticates by using a bot token and a signing key.
   */
  botToken?: ConnectorAuthenticationInputBotToken;
  /**
   * @remarks
   * Authenticates by using an OAuth client identity.
   */
  oauth?: ConnectorAuthenticationInputOauth;
  /**
   * @remarks
   * Authenticates by using a personal access token.
   */
  patToken?: ConnectorAuthenticationInputPatToken;
  /**
   * @remarks
   * Authenticates by using a RAM role ARN.
   */
  role?: ConnectorAuthenticationInputRole;
  /**
   * @remarks
   * Authenticates by using local credential binding.
   */
  satellite?: ConnectorAuthenticationInputSatellite;
  /**
   * @remarks
   * Authentication type
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN_RESOURCE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      basic: 'basic',
      botToken: 'botToken',
      oauth: 'oauth',
      patToken: 'patToken',
      role: 'role',
      satellite: 'satellite',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basic: ConnectorAuthenticationInputBasic,
      botToken: ConnectorAuthenticationInputBotToken,
      oauth: ConnectorAuthenticationInputOauth,
      patToken: ConnectorAuthenticationInputPatToken,
      role: ConnectorAuthenticationInputRole,
      satellite: ConnectorAuthenticationInputSatellite,
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
    if(this.patToken && typeof (this.patToken as any).validate === 'function') {
      (this.patToken as any).validate();
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

