// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiPolicyRedisConfig extends $dara.Model {
  /**
   * @remarks
   * The zero-based index of the Redis database to use. The default value is 0.
   */
  databaseNumber?: number;
  /**
   * @remarks
   * The hostname of the Redis instance.
   */
  host?: string;
  /**
   * @remarks
   * The password for Redis authentication.
   */
  password?: string;
  /**
   * @remarks
   * The port number of the Redis instance.
   */
  port?: number;
  /**
   * @remarks
   * The connection timeout in milliseconds.
   */
  timeout?: number;
  /**
   * @remarks
   * The username for Redis authentication.
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNumber: 'databaseNumber',
      host: 'host',
      password: 'password',
      port: 'port',
      timeout: 'timeout',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNumber: 'number',
      host: 'string',
      password: 'string',
      port: 'number',
      timeout: 'number',
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

