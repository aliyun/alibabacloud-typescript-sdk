// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrationSourceAuthInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication type.
   */
  authType?: string;
  /**
   * @remarks
   * The password used for authentication.
   */
  password?: string;
  /**
   * @remarks
   * The token used for authentication.
   */
  token?: string;
  /**
   * @remarks
   * The username used for authentication.
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      password: 'password',
      token: 'token',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      password: 'string',
      token: 'string',
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

export class MigrationSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The endpoint address of the migration source.
   */
  endpoint?: string;
  /**
   * @remarks
   * The port number of the migration source.
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationSource extends $dara.Model {
  /**
   * @remarks
   * The authentication information of the migration source.
   */
  authInfo?: MigrationSourceAuthInfo;
  /**
   * @remarks
   * The name of the database to migrate.
   */
  database?: string;
  /**
   * @remarks
   * The endpoint information of the migration source.
   */
  endpoint?: MigrationSourceEndpoint;
  static names(): { [key: string]: string } {
    return {
      authInfo: 'authInfo',
      database: 'database',
      endpoint: 'endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authInfo: MigrationSourceAuthInfo,
      database: 'string',
      endpoint: MigrationSourceEndpoint,
    };
  }

  validate() {
    if(this.authInfo && typeof (this.authInfo as any).validate === 'function') {
      (this.authInfo as any).validate();
    }
    if(this.endpoint && typeof (this.endpoint as any).validate === 'function') {
      (this.endpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

