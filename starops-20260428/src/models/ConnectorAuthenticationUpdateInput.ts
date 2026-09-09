// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectorAuthenticationUpdateInputBasic extends $dara.Model {
  /**
   * @remarks
   * Replacement password
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

export class ConnectorAuthenticationUpdateInputBotToken extends $dara.Model {
  /**
   * @remarks
   * Replacement bot token
   * 
   * This parameter is required.
   * 
   * @example
   * example-bot-token
   */
  botToken?: string;
  /**
   * @remarks
   * Replacement signing secret
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

export class ConnectorAuthenticationUpdateInputOauth extends $dara.Model {
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
   * Replacement OAuth client secret
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

export class ConnectorAuthenticationUpdateInputPatToken extends $dara.Model {
  /**
   * @remarks
   * The personal access token used to replace the existing credential.
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

export class ConnectorAuthenticationUpdateInputRole extends $dara.Model {
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

export class ConnectorAuthenticationUpdateInputSatellite extends $dara.Model {
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

export class ConnectorAuthenticationUpdateInput extends $dara.Model {
  /**
   * @remarks
   * The configuration that uses a username and password to replace the existing authentication configuration.
   */
  basic?: ConnectorAuthenticationUpdateInputBasic;
  /**
   * @remarks
   * The configuration that uses a bot token and signing key to replace the existing authentication configuration.
   */
  botToken?: ConnectorAuthenticationUpdateInputBotToken;
  /**
   * @remarks
   * The configuration that uses an OAuth client identity to replace the existing authentication configuration.
   */
  oauth?: ConnectorAuthenticationUpdateInputOauth;
  /**
   * @remarks
   * The configuration that uses a personal access token to replace the existing authentication configuration.
   */
  patToken?: ConnectorAuthenticationUpdateInputPatToken;
  /**
   * @remarks
   * The configuration that uses a RAM role ARN to replace the existing authentication configuration.
   */
  role?: ConnectorAuthenticationUpdateInputRole;
  /**
   * @remarks
   * The configuration that uses a local credential binding to replace the existing authentication configuration.
   */
  satellite?: ConnectorAuthenticationUpdateInputSatellite;
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
      patToken: 'patToken',
      role: 'role',
      satellite: 'satellite',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basic: ConnectorAuthenticationUpdateInputBasic,
      botToken: ConnectorAuthenticationUpdateInputBotToken,
      oauth: ConnectorAuthenticationUpdateInputOauth,
      patToken: ConnectorAuthenticationUpdateInputPatToken,
      role: ConnectorAuthenticationUpdateInputRole,
      satellite: ConnectorAuthenticationUpdateInputSatellite,
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

