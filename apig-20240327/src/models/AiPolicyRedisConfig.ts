// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiPolicyRedisConfig extends $dara.Model {
  /**
   * @remarks
   * The Redis database number.
   * 
   * @example
   * 0
   */
  databaseNumber?: number;
  /**
   * @remarks
   * The Redis host address.
   * 
   * @example
   * r-xxx.redis.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The Redis password.
   * 
   * @example
   * pass
   */
  password?: string;
  /**
   * @remarks
   * The Redis port.
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The timeout period, in milliseconds.
   * 
   * @example
   * 5000
   */
  timeout?: number;
  /**
   * @remarks
   * The Redis username.
   * 
   * @example
   * user
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

