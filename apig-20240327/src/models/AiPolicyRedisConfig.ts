// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiPolicyRedisConfig extends $dara.Model {
  databaseNumber?: number;
  host?: string;
  password?: string;
  port?: number;
  timeout?: number;
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

